import styled from "styled-components";
import { Row as RowComponent, Col } from "react-bootstrap";

import { respondBelow } from "@/styles";

export const Row = styled(RowComponent)`
  ${respondBelow("sm")`
    flex-direction: column-reverse;
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
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.textContent};

  ${respondBelow("sm")`
    letter-spacing: 1px;
  `}
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.textHeading};
  font-family: ${({ theme }) => theme.fonts.secondary};

  ${respondBelow("sm")`
    font-size: 32px;
    line-height: 40px;
  `}

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Description = styled.div`
  opacity: 0.9;
  font-size: 16px;
  line-height: 30px;
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
