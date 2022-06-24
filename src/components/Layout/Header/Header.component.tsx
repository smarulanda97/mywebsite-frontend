import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";

import { Menu } from "@/components";

import * as Styled from "./Header.styled";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Styled.Header data-testid={"layout-header"}>
      <Styled.Navbar expand={"lg"}>
        <Container fluid>
          <Link href="/" passHref>
            <Styled.NavbarBrand>
              <Image src="/logo.png" height={70} width={140} alt={"Santiago Marulanda logo"} />
            </Styled.NavbarBrand>
          </Link>
          <Styled.NavbarToggle aria-controls="navbar" />
          <Styled.NavbarCollapse id="navbar">
            <Menu name={"main"} />
          </Styled.NavbarCollapse>
        </Container>
      </Styled.Navbar>
    </Styled.Header>
  );
};

export default Header;
