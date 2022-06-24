import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

import * as Styled from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <footer data-testid={"layout-footer"}>
      <Styled.Container>
        <Row>
          <Col>
            <div>
              <Link href="/" passHref>
                <a>
                  <Image src="/logo.png" height={70} width={140} alt={"Santiago Marulanda logo"} />
                </a>
              </Link>
            </div>
            <p className="description mt--30">
              © 2021. All rights reserved by santiagomarulanda.com
            </p>
          </Col>
        </Row>
      </Styled.Container>
    </footer>
  );
};

export default Footer;
