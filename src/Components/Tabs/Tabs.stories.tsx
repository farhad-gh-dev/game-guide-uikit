import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "./Tabs";

export default {
  title: "Composed_Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  // children: <div id="test">test</div>,
};
