import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from "./Loading";

export default {
  title: "Unit_Components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Standard = Template.bind({});

export const CoverThePage = Template.bind({});
CoverThePage.args = {
  coverPage: true,
};
