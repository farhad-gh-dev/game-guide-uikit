import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Tabs from "./Tabs";

export default {
  title: "Composed_Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const dummyData = [
  {
    tabTitle: "Collection Details",
    tabContent: "tab 1 content",
  },
  {
    tabTitle: "Available Versions",
    tabContent: "tab 2 content",
  },
  {
    tabTitle: "Installation Guide",
    tabContent: "tab 3 content",
  },
  {
    tabTitle: "Comments",
    tabContent: "tab 4 content",
  },
];

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  tabItems: dummyData,
  defaultActiveIndex: 0,
};

Standard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTestId(`tab-lg-${dummyData[1].tabTitle}`));
  await expect(canvas.getByText(dummyData[1].tabContent)).toBeInTheDocument();
};
