import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { breakpoint } from "../../Styles/styles";

import ItemCard from "./ItemCard";

export default {
  title: "UnitComponents/ItemCard",
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
  title: "Modern Warfare 3",
  rating: 9.3,
  imageSrc:
    "https://i.pinimg.com/originals/6f/1c/32/6f1c32968dbde34bcbe8c78ed25130b2.jpg",
};

export const Empty = Template.bind({});

export const Multiple = () => {
  return (
    <div style={{ display: "flex" }}>
      <Template
        title="Modern Warfare 2"
        rating={9.3}
        imageSrc="https://static.displate.com/857x1200/displate/2021-08-26/d53d94f4e94a39a968db747deb170df5_e4f386a63470a1303a5e7e55c8f4d0eb.jpg"
      />
      <div style={{ padding: "10px" }}></div>
      <Template
        title="Squid Games"
        rating={8}
        imageSrc="https://img.posterlounge.de/images/l/1909398.jpg"
      />
    </div>
  );
};
