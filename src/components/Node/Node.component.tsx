import { useRouter } from "next/router";

import { useNode } from "@/hooks";
import { NodePortfolio } from "@/src/models";
import Portfolio from "./Portfolio/Portfolio.component";
import Error from "next/error";

type Props = {
  nodePath: string;
};

export function Node(props: Props): JSX.Element {
  const { isLoading, isError, data: node } = useNode(props.nodePath);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Error statusCode={404} />;
  }

  switch (node.type) {
    case "node--portfolio":
      return <Portfolio node={node as NodePortfolio} />;
    default:
      return null;
  }
}
