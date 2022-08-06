import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { breakpoint } from "../../Styles/styles";

import ItemCard from "./ItemCard";

export default {
  title: "Composed_Components/ItemCard",
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>;

const StyledContainer = styled.div`
  width: 150px;
  display: flex;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 180px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 251px;
  }
`;

const Template: ComponentStory<typeof ItemCard> = (args) => (
  <StyledContainer>
    <ItemCard {...args} />
  </StyledContainer>
);

export const Standard = Template.bind({});
Standard.args = {
  cardInfo: {
    title: "Mortal Kombat",
    rating: 9.3,
    imageSrc: "https://m.media-amazon.com/images/I/71MLMRhVSIL._AC_SL1500_.jpg",
  },
};

export const Empty = Template.bind({});

export const Multiple = () => {
  return (
    <div style={{ display: "flex" }}>
      <Template
        cardInfo={{
          title: "Modern Warfare 2",
          rating: 9.3,
          imageSrc:
            "https://static.posters.cz/image/1300/poster/call-of-duty-mw2-cover-i7151.jpg",
        }}
      />
      <div style={{ padding: "10px" }}></div>
      <Template
        cardInfo={{
          title: "Squid Games",
          rating: 8,
          imageSrc: "https://img.posterlounge.de/images/l/1909398.jpg",
        }}
      />
    </div>
  );
};
