import { Paragraph } from "@/components";
import { NodePortfolio as NodePortfolio } from "@/src/models";

type Props = {
  node: NodePortfolio;
};

const Portfolio: React.FC<Props> = (props) => {
  const { node } = props;

  return (
    <>
      {!node.content.length
        ? null
        : node.content.map((n) => <Paragraph key={n.id} paragraph={n} />)}
    </>
  );
};

export default Portfolio;
