import SkillLink from "./SkillLink/SkillLink.component";
import SocialLink from "./SocialLink/SocialLink.component";
import PortfolioBanner from "./PortfolioBanner/PortfolioBanner.component";

import {
  Paragraph,
  ParagraphSocialLink,
  ParagraphPortfolioBanner,
  ParagraphSkillLink,
} from "@/models";

type ParagraphProps = {
  paragraph: Paragraph;
};

export function Paragraph(props: ParagraphProps) {
  switch (props.paragraph.type) {
    case "paragraph--portfolio_banner":
      return <PortfolioBanner paragraph={props.paragraph as ParagraphPortfolioBanner} />;
    case "paragraph--social_link":
      return <SocialLink paragraph={props.paragraph as ParagraphSocialLink} />;
    case "paragraph--skill_link":
      return <SkillLink paragraph={props.paragraph as ParagraphSkillLink} />;
    default:
      return null;
  }
}
