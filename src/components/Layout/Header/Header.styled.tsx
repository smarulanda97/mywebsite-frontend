import styled from "styled-components";
import { Navbar as NavbarComponent } from "react-bootstrap";
import { respondAbove, respondBelow } from "@/styles";

export const Header = styled.header`
  display: flex;
  min-height: 122px;
  flex-direction: column;
  justify-content: center;

  ${respondBelow("sm")`
    min-height: 80px;
  `}
`;

export const Navbar = styled(NavbarComponent)`
  ${respondAbove("md")`
    padding-left: 70px;
    padding-right: 70px;
  `}
`;

export const NavbarBrand = styled(Navbar.Brand)`
  ${respondBelow("sm")`
    padding: 0;
  `}
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  border: none;
  color: transparent;

  &:active,
  &:focus,
  &:focus-within,
  &:focus-visible,
  &:active,
  &:target {
    border: none;
    box-shadow: none;
    color: transparent;
  }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  justify-content: end;
`;
