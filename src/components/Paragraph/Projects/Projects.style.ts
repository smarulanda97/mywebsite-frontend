import styled from "styled-components";
import { Container as ContainerComponent } from "react-bootstrap";

export const Container = styled(ContainerComponent)`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Subtitle = styled.span`
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
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
  font-size: 60px;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.textHeading};
`;
