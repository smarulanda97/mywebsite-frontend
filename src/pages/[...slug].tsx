import { dehydrate, QueryClient } from "react-query";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";

import { drupal } from "@/lib";
import { PageProps } from "@/models";
import { getQueryKeyNode } from "@/utilities";
import { getNodeFromContext } from "@/services";
import { Node as DrupalNode } from "@/components";

export default function Node(props: PageProps) {
  return <DrupalNode nodePath={props.nodePath} />;
}

export async function getServerSideProps(context): Promise<any> {
  const queryClient = new QueryClient();

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
