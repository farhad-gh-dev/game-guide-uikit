import React from "react";
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
      id: 2,
      backgroundImageSrc:
        "https://p4.wallpaperbetter.com/wallpaper/316/557/111/control-controlgame-remedy-games-red-pyramid-hd-wallpaper-preview.jpg",
      overlayImageSrc:
        "https://static.wikia.nocookie.net/playstationallstarsfanfictionroyale/images/e/e8/JesseFaden.png",
      overlayImageHeight: 125,
      overlayPositionFromRight: 10,
      title: "control",
      titleImageSrc:
        "https://www.remedygames.com/wp-content/uploads/2018/05/ujujujuj3.png",
      titleImageHeight: 67,
      price: 1700,
    },
    {
      id: 1,
      backgroundImageSrc:
        "https://progameguides.com/wp-content/uploads/2021/12/Featured-VALORANT-Logo-900x506.jpg",
      overlayImageSrc:
        "https://i.pinimg.com/originals/a9/94/d9/a994d91c5d89aca55b8231879dd7c9d0.png",
      overlayImageHeight: 120,
      overlayPositionFromRight: 0,
      title: "valorant",
      price: 1500,
    },
  ],
  onToggleInCart: (itemId) => {
    console.log(itemId);
  },
};

export const ItemIsInBasket = Template.bind({});
ItemIsInBasket.args = {
  sliderItems: [
    {
      id: 1,
      backgroundImageSrc:
        "https://progameguides.com/wp-content/uploads/2021/12/Featured-VALORANT-Logo-900x506.jpg",
      overlayImageSrc:
        "https://i.pinimg.com/originals/a9/94/d9/a994d91c5d89aca55b8231879dd7c9d0.png",
      overlayImageHeight: 120,
      overlayPositionFromRight: 0,
      title: "valorant",
      price: 1500,
    },
  ],
  basketItems: ["1"],
  onToggleInCart: (itemId) => {
    console.log(itemId);
  },
};

export const Empty = Template.bind({});
Empty.args = {
  sliderItems: [{}],
};
