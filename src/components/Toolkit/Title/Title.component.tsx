import { StyledTitle } from "./Title.style";

type Props = {
  as?: string;
  html?: string;
};

export const Title: React.FC<Props> = ({ as = "h1", html }) => {
  if (!html) {
    return null;
  }

  return <StyledTitle as={as} dangerouslySetInnerHTML={{ __html: html }} />;
};
