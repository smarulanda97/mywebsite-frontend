import styled from "styled-components";
import { Container as ContainerComponent } from "react-bootstrap";

export const Container = styled(ContainerComponent)`
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 95%;
    height: 1px;
    content: "";
    background: ${({ theme }) => theme.colors.light};
  }
`;

export const Subtitle = styled.span`
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
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
`;
