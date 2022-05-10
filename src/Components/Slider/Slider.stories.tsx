import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { breakpoint } from "../../Styles/styles";

import Slider from "./Slider";

export default {
  title: "Composed_Components/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const StyledContainer = styled.div`
  margin-top: 70px;
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
Standard.args = {
  sliderItems: [
    {
      id: 1,
      backgroundImageSrc:
        "https://progameguides.com/wp-content/uploads/2021/12/Featured-VALORANT-Logo-900x506.jpg",
      overlayImageSrc:
        "https://i.pinimg.com/originals/a9/94/d9/a994d91c5d89aca55b8231879dd7c9d0.png",
      overlayImageHeight: 121,
      overlayPositionFromRight: 2,
      titleImageSrc:
        "https://logodownload.org/wp-content/uploads/2020/06/valorant-logo.png",
      titleImageHeight: 50,
      lightDescription: true,
      price: 1500,
    },
    {
      id: 2,
      backgroundImageSrc:
        "https://gmedia.playstation.com/is/image/SIEPDC/apex-legends-overview-section-background-desktop-tablet-01-ps4-en-06feb19?$native$",
      overlayImageSrc:
        "https://gmedia.playstation.com/is/image/SIEPDC/apex-legends-seer-character-image-block-01-ps4-en-27jul21?$native--t$",
      overlayPositionFromRight: -3,
      title: "Apex Legends",
      price: 1700,
    },
  ],
  onBuyHandler: (itemId) => {
    console.log(itemId);
  },
};

export const Empty = Template.bind({});
Empty.args = {
  sliderItems: [{}],
};
