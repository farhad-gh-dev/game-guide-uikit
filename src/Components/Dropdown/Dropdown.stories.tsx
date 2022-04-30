import { ComponentStory, ComponentMeta } from "@storybook/react";

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

export const Empty = Template.bind({});
