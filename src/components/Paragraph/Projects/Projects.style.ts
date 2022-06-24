import styled from "styled-components";
import { Container as ContainerComponent } from "react-bootstrap";

import { respondBelow, separator } from "@/styles";

export const Container = styled(ContainerComponent)`
  padding-top: 100px;
  padding-bottom: 100px;

  ${separator()}
`;

export const Subtitle = styled.span`
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.95rem;
  line-height: 14px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 3.75rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.textHeading};

  ${respondBelow("sm")`
    font-size: 2.125rem;
  `}
`;
