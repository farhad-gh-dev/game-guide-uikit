import { ComponentStory, ComponentMeta } from "@storybook/react";

import Rating from "./Rating";

export default {
  title: "UnitComponents/Rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

// Add background for visibility
const Template: ComponentStory<typeof Rating> = (args) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#6868FF",
      padding: "20px",
    }}
  >
    <Rating {...args} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  rating: 8.4,
};

export const NoRating = Template.bind({});
