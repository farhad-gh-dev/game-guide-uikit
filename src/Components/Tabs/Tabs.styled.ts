import styled from "styled-components";
import { color, breakpoint } from "../../Styles/styles";

export const StyledTabs = styled.div``;

export const TabContent = styled.div`
  margin-bottom: 50px;

  @media (min-width: ${breakpoint.largeScreen}px) {
    margin-bottom: 70px;
  }
`;
