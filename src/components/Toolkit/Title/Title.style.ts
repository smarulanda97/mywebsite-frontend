import styled from "styled-components";

export const StyledTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.textHeading};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
