import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "./Tabs";

export default {
  title: "Composed_Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  tabItems: [
    {
      tabTitle: "Collection Details",
      tabContent: <div>tab 1 content</div>,
    },
    {
      tabTitle: "Available Versions",
      tabContent: <div>tab 2 content</div>,
    },
    {
      tabTitle: "Installation Guide",
      tabContent: <div>tab 3 content</div>,
    },
  ],
  defaultActiveIndex: 1,
};
