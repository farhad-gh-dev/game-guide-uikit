import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

const btnSize = {
  width_small: 80,
  height_small: 37,

  width_large: 160,
  height_large: 65,
};

const StyledButton = styled.button<{ active: boolean }>`
  width: ${btnSize.width_small}px;
  height: ${btnSize.height_small}px;
  padding: 0 10px;
  font-size: ${typography.size.text_12};
  font-weight: ${typography.weight.medium};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-color: ${(props) =>
    props.active ? "transparent" : "rgba(0, 0, 0, 0.08)"};
  border-radius: 10px;
  background-color: ${(props) => (props.active ? color.primary : "#f7f7f7")};
  color: ${(props) => (props.active ? "white" : "black")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${breakpoint.sm}px) {
    width: ${btnSize.width_large}px;
    height: ${btnSize.height_large}px;
    padding: 0 20px;
    font-size: ${typography.size.text_18};
    border: 2px solid rgba(0, 0, 0, 0.05);
    border-color: ${(props) =>
      props.active ? "transparent" : "rgba(0, 0, 0, 0.05)"};
    border-radius: 20px;
  }
`;

export default StyledButton;
