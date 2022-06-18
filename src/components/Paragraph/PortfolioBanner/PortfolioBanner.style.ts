import styled from "styled-components";
import { Container as ContainerComponent, Row as RowComponent, Col } from "react-bootstrap";

import { respondBelow } from "@/styles";

export const Container = styled(ContainerComponent)`
  padding-bottom: 100px;

  ${respondBelow("sm")`
    padding-top: 20px;
  `}
`;

export const Row = styled(RowComponent)`
  ${respondBelow("sm")`
    flex-direction: column-reverse;
  `}
`;

export const RowIcons = styled(Row)`
  ${respondBelow("md")`
    > div:first-child {
      margin-top: 25px;
    }
  `}
`;

export const ColLeft = styled(Col)`
  ${respondBelow("sm")`
    margin-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
  `}
`;

export const ColRight = styled(Col)`
  padding-left: 30px;
  padding-right: 30px;

  ${respondBelow("sm")`
    padding-left: 15px;
    padding-right: 15px;
  `}
`;

export const Subtitle = styled.span`
  display: block;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.textContent};

  ${respondBelow("sm")`
    letter-spacing: 1px;
  `}
`;

export const Title = styled.h1`
  font-weight: 700;
  line-height: 75px;
  font-size: 3.75rem;
  margin-bottom: 25px;
  word-break: break-all;
  color: ${({ theme }) => theme.colors.textHeading};
  font-family: ${({ theme }) => theme.fonts.secondary};

  ${respondBelow("sm")`
    font-size: 2rem;
    line-height: 40px;
  `}

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Description = styled.div`
  opacity: 0.9;
  line-height: 30px;
  font-size: 1rem;
  padding-right: 16%;
  color: ${({ theme }) => theme.colors.textContent};

  ${respondBelow("sm")`
    padding-right: 0;
  `}

  p:last-child {
    margin-bottom: 100px;

    ${respondBelow("sm")`
      margin-bottom: 40px;
    `}
  }
`;
