import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { breakpoint } from "../../Styles/styles";

import Slider from "./Slider";

export default {
  title: "UnitComponents/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const StyledContainer = styled.div`
  width: 300px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 764px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 1064px;
  }
`;

// Add container for visibility
const Template: ComponentStory<typeof Slider> = (args) => (
  <StyledContainer>
    <Slider {...args} />
  </StyledContainer>
);

export const Standard = Template.bind({});
Standard.args = {};
