import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import { getImageProps } from "@/utilities";
import { Paragraph, List } from "@/components";
import { ParagraphPortfolioBanner } from "@/models";

import * as Styled from "./PortfolioBanner.style";

type Props = {
  paragraph: ParagraphPortfolioBanner;
};

const PortfolioBanner: React.FC<Props> = (props) => {
  const { paragraph } = props;

  return (
    <Container>
      <Styled.Row className="align-items-center">
        <Styled.ColLeft sm={12} lg={7}>
          {paragraph.subtitle ? (
            <Styled.Subtitle data-testid="portfolio-banner-subt">
              {paragraph.subtitle}
            </Styled.Subtitle>
          ) : null}
          {paragraph.title ? (
            <Styled.Title
              dangerouslySetInnerHTML={{ __html: paragraph.title.processed }}
            ></Styled.Title>
          ) : null}
          {paragraph.description ? (
            <Styled.Description
              data-testid="portfolio-banner-desc"
              dangerouslySetInnerHTML={{ __html: paragraph.description.processed }}
            ></Styled.Description>
          ) : null}

          <Row data-testid="portfolio-icons">
            <Col sm={12} md={6}>
              <List
                title="Find with me"
                elements={paragraph.socialLinks}
                render={(p) => <Paragraph paragraph={p} />}
              />
            </Col>
            <Col sm={12} md={6}>
              <List
                title="Best skills"
                elements={paragraph.skillLinks}
                render={(p) => <Paragraph paragraph={p} />}
              />
            </Col>
          </Row>
        </Styled.ColLeft>
        <Styled.ColRight sm={12} lg={5}>
          {paragraph.mediaImage ? <Image {...getImageProps(paragraph.mediaImage.image)} /> : null}
        </Styled.ColRight>
      </Styled.Row>
    </Container>
  );
};

export default PortfolioBanner;
