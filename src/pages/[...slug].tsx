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

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(
      ["node--article", "node--page", "node--portfolio"],
      context
    ),
    fallback: "blocking",
  };
}

export async function getStaticProps(context): Promise<GetStaticPropsResult<PageProps>> {
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
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
