import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { breakpoint } from "../../Styles/styles";

import OfferCard from "./OfferCard";

export default {
  title: "Composed_Components/OfferCard",
  component: OfferCard,
} as ComponentMeta<typeof OfferCard>;

const StyledContainer = styled.div`
  display: inline-block;
  width: 310px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 325px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 434px;
  }
`;

// Card Container
const Template: ComponentStory<typeof OfferCard> = (args) => (
  <StyledContainer>
    <OfferCard {...args} />
  </StyledContainer>
);

export const Standard = Template.bind({});
Standard.args = {
  itemData: {
    title: "Cyberpunk 2077",
    imageSrc:
      "https://i.pinimg.com/originals/a9/8a/0e/a98a0ed91d96d4c56e0562842a402374.jpg",
    url: "/",
    price: 450,
    rating: 9.3,
    dropdownItems: [
      { text: "Collection", url: "/" },
      { text: "title", url: "/" },
    ],
  },
};

export const Empty = Template.bind({});

export const Multiple: ComponentStory<typeof OfferCard> = () => {
  return (
    <StyledContainer>
      <OfferCard
        itemData={{
          title: "Cyberpunk 2077",
          imageSrc:
            "https://i.pinimg.com/originals/a9/8a/0e/a98a0ed91d96d4c56e0562842a402374.jpg",
          url: "/",
          price: 450,
          rating: 7.9,
          dropdownItems: [
            { text: "Collection", url: "/" },
            { text: "title", url: "/" },
          ],
        }}
      />
      <OfferCard
        itemData={{
          title: "Elden Ring",
          imageSrc: "https://www.gamepressure.com/i/h/17/383338361.jpg",
          url: "/",
          price: 34.9,
          rating: 9.8,
          isInBasket: true,
          dropdownItems: [
            { text: "Collection", url: "/" },
            { text: "title", url: "/" },
          ],
        }}
      />
    </StyledContainer>
  );
};
