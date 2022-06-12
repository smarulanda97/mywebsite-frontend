import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";

import { Menu } from "@/components";

import * as Styled from "./Header.styled";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Navbar expand={"lg"}>
        <Container fluid>
          <Link href="/" passHref>
            <Navbar.Brand>
              <Image src="/logo.png" height={70} width={140} />
            </Navbar.Brand>
          </Link>
          <Styled.NavbarCollapse>
            <Menu name={"main"} />
          </Styled.NavbarCollapse>
        </Container>
      </Navbar>
    </Styled.Header>
  );
};

export default Header;
