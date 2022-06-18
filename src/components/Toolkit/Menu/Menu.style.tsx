import styled from "styled-components";
import { Nav as NavComponent } from "react-bootstrap";

export const Nav = styled(NavComponent)`
  display: flex;
  list-style: none;
  margin-bottom: 0;
`;

export const NavItem = styled(NavComponent.Item)`
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 14px;

  a {
    display: block;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textContent};

    &.active {
      color: ${({ theme }) => theme.colors.primary} !important;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
