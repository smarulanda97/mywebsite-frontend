import SkillLink from "./SkillLink/SkillLink.component";
import SocialLink from "./SocialLink/SocialLink.component";
import PortfolioBanner from "./PortfolioBanner/PortfolioBanner.component";
import Projects from "@/src/components/Paragraph/Projects/Projects.component";
import ProjectsItem from "@/src/components/Paragraph/ProjectsItem/ProjectsItem";

import {
  Paragraph,
  ParagraphProjects,
  ParagraphSkillLink,
  ParagraphSocialLink,
  ParagraphPortfolioBanner,
  ParagraphProjectsItem,
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
    case "paragraph--projects":
      return <Projects paragraph={props.paragraph as ParagraphProjects} />;
    case "paragraph--projects_item":
      return <ProjectsItem paragraph={props.paragraph as ParagraphProjectsItem} />;
    default:
      return null;
  }
}
