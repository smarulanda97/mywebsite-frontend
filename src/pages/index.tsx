import { GetStaticPropsResult } from "next";
import { QueryClient, dehydrate } from "react-query";

import { drupal } from "@/lib";
import { PageProps } from "@/models";
import { getNodesArticleFromContext } from "@/services";

export default function IndexPage(props: PageProps) {
  return <p>Page Index</p>;
}

export async function getStaticProps(ctx): Promise<GetStaticPropsResult<PageProps>> {
  const queryClient = new QueryClient();
  const nodePath = drupal.getPathFromContext(ctx);

  await queryClient.prefetchQuery("node", async () => getNodesArticleFromContext(ctx));

  return {
    props: {
      nodePath: nodePath,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}
