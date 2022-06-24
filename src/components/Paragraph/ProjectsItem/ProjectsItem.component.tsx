import Link from "next/link";
import Image from "next/image";
import { Col } from "react-bootstrap";

import { ParagraphProjectsItem } from "@/models";
import { getImageProps, getDefaultLinkAttributes } from "@/utilities";

import * as Styled from "./ProjectsItem.style";

type Props = {
  paragraph: ParagraphProjectsItem;
};

const ProjectsItemComponent: React.FC<any> = (props) => {
  const { mediaImage, subtitle, title, company, link, description } = props.paragraph;

  return (
    <Styled.Container xl={4} lg={6} md={6} sm={12}>
      <Styled.Card>
        <Styled.Thumbnail>
          <Image {...getImageProps(mediaImage.image)} />
        </Styled.Thumbnail>
        <Styled.Content>
          {subtitle ? <Styled.Subtitle>{subtitle}</Styled.Subtitle> : null}
          {company ? (
            <Styled.Company href={company.link.url} {...getDefaultLinkAttributes(company.link.url)}>
              Company {company.name}
            </Styled.Company>
          ) : null}
          {title && link ? (
            <Styled.Title href={link.url} {...getDefaultLinkAttributes(link.url)}>
              <h3 dangerouslySetInnerHTML={{ __html: title.processed }} />
            </Styled.Title>
          ) : null}
          {/*{description ? <div dangerouslySetInnerHTML={{ __html: description.processed }} /> : null}*/}
        </Styled.Content>
      </Styled.Card>
    </Styled.Container>
  );
};

export default ProjectsItemComponent;
