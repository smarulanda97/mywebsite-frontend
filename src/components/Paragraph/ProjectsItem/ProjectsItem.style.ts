import styled from "styled-components";
import Link from "next/link";
import { Col as ColComponent } from "react-bootstrap";
import { respondBelow, respondBetween } from "@/styles";

export const Container = styled(ColComponent)`
  margin-top: 50px;
  padding-left: 25px;
  padding-right: 25px;

  ${respondBetween("md", "lg")`
    padding-left: 10px;
    padding-right: 10px;
  `}
`;

export const Card = styled.div`
  height: 100%;
  padding: 30px;
  border-radius: 20px;
  text-align: left;
  transition: 0.5s all ease-in-out;
  background: ${({ theme }) => theme.colors.gradientBoxDark};
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

export const Thumbnail = styled.div`
  a {
    display: block;
    overflow: hidden;
  }

  img {
    object-fit: cover;
    transition: 0.4s;
    min-height: 200px;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  padding-top: 18px;
`;

export const Subtitle = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Company = styled.a`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textContent};
  padding-bottom: 10px;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.a`
  a {
    display: block;
  }

  h3 {
    line-height: 34px;
    font-weight: 600;
    font-size: 1.438rem;
    color: ${({ theme }) => theme.colors.textHeading};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
