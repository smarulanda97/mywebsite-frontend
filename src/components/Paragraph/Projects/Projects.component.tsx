import { Container, Row, Col } from "react-bootstrap";

import { Paragraph } from "@/components";
import { ParagraphProjects } from "@/models";

import * as Styled from "./Projects.style";

type Props = {
  paragraph: ParagraphProjects;
};

const Projects: React.FC<Props> = (props) => {
  const { paragraph } = props;

  return (
    <Styled.Container data-testid="portfolio-projects">
      <Row>
        <Col>
          {paragraph.subtitle ? <Styled.Subtitle>{paragraph.subtitle}</Styled.Subtitle> : null}
          {paragraph.title ? (
            <Styled.Title dangerouslySetInnerHTML={{ __html: paragraph.title.processed }} />
          ) : null}
        </Col>
      </Row>
      <Row>
        {paragraph.projects
          ? paragraph.projects.map((p) => <Paragraph key={p.id} paragraph={p} />)
          : null}
      </Row>
    </Styled.Container>
  );
};

export default Projects;
