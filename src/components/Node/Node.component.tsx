import Portfolio from "./Portfolio/Portfolio.component";

import { useNode } from "@/hooks";
import { NodePortfolio } from "@/src/models";

type Props = {
  nodePath: string;
};

export function Node(props: Props): JSX.Element {
  const { isLoading, data: node } = useNode(props.nodePath);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  switch (node.type) {
    case "node--portfolio":
      return <Portfolio node={node as NodePortfolio} />;
    default:
      return null;
  }
}
