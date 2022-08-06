import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Rating from "./Rating";

export default {
  title: "Unit_Components/Rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

// Add background for visibility
const Template: ComponentStory<typeof Rating> = (args) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "hsl(0, 88.34951456310678%, 45%)",
      padding: "20px",
    }}
  >
    <Rating {...args} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  rating: 8.4135135,
};

Standard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByTestId("rating").textContent).toBe("8.4");
};

export const NoRating = Template.bind({});
