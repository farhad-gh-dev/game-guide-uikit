import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Dropdown from "./Dropdown";

export default {
  title: "Unit_Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div style={{ paddingLeft: "160px" }}>
    <Dropdown {...args} />
  </div>
);

const mockData = [
  { text: "sports", url: "#" },
  { text: "competitive", url: "#" },
  { text: "action", url: "#" },
];

export const Standard = Template.bind({});
Standard.args = {
  items: mockData,
};

Standard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTestId("dropdown-menu-toggler"));

  await expect(canvas.queryByText(mockData[0].text)).toBeInTheDocument();

  await userEvent.click(canvas.getByTestId("dropdown-menu-toggler"));

  await expect(canvas.queryByText(mockData[0].text)).not.toBeInTheDocument();
};

export const Empty = Template.bind({});
