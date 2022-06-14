import styled from "styled-components";
import { Col as ColComponent } from "react-bootstrap";

export const Container = styled(ColComponent)`
  margin-top: 50px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Card = styled.div`
  height: 100%;
  padding: 30px;
  border-radius: 20px;
  text-align: left;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

export const Thumbnail = styled.div`
  a {
    display: block;
    overflow: hidden;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  padding-top: 18px;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h3`
  font-size: 23px;
  line-height: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textHeading};
`;
