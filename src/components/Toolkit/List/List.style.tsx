import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  display: block;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin: -10px -12px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    margin: 10px 12px;
  }

  a {
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.gradientBox};
    display: block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    border-radius: 6px;

    > span {
      vertical-align: middle;

      img {
        height: 32px !important;
      }
    }
  }
`;
