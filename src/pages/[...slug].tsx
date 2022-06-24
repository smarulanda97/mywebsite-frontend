import { dehydrate } from "react-query";

import { PageProps } from "@/models";
import { drupal, queryClient } from "@/lib";
import { getQueryKeyNode } from "@/utilities";
import { getNodeFromContext } from "@/services";
import { Node as DrupalNode } from "@/components";

export default function Node(props: PageProps) {
  return <DrupalNode nodePath={props.nodePath} />;
}

export async function getServerSideProps(context): Promise<any> {
  try {
    const nodePath = drupal.getPathFromContext(context);
    const path = await drupal.translatePathFromContext(context);
    await queryClient.prefetchQuery(getQueryKeyNode(nodePath), async () =>
      getNodeFromContext(path, context)
    );

    return {
      props: {
        nodePath: nodePath,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
