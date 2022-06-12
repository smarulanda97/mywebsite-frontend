import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { respondAbove } from "@/styles";

export const Header = styled.div`
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  nav {
    ${respondAbove("md")`
      padding: 0 70px;
    `}
  }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  justify-content: end;
`;
