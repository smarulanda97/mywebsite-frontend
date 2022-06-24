import styled from "styled-components";
import { Container as ContainerComponent } from "react-bootstrap";
import { separator } from "@/styles";

export const Container = styled(ContainerComponent)`
  padding: 100px 0;
  text-align: center;
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textContent};

  p {
    margin-top: 30px;
  }

  ${separator()}
`;
