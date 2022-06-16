import Link from "next/link";
import Image from "next/image";
import { Col } from "react-bootstrap";

import { ParagraphProjectsItem } from "@/models";
import { getImageProps, getDefaultLinkAttributes } from "@/utilities";

import * as Styled from "./ProjectsItem.style";

type Props = {
  paragraph: ParagraphProjectsItem;
};

const ProjectsItem: React.FC<any> = (props) => {
  const { paragraph } = props;

  return (
    <Styled.Container xl={4} lg={6} md={6} sm={12}>
      <Styled.Card>
        <Styled.Thumbnail>
          <Link href={paragraph.link.url}>
            <a {...getDefaultLinkAttributes(paragraph.link.url)}>
              <Image {...getImageProps(paragraph.mediaImage.image)} />
            </a>
          </Link>
        </Styled.Thumbnail>
        <Styled.Content>
          {paragraph.subtitle ? <Styled.Subtitle>{paragraph.subtitle}</Styled.Subtitle> : null}
          {paragraph.title ? (
            <Styled.Title dangerouslySetInnerHTML={{ __html: paragraph.title.processed }} />
          ) : null}
        </Styled.Content>
      </Styled.Card>
    </Styled.Container>
  );
};

export default ProjectsItem;
