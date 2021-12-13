import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "UnitComponents/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
  label: "Action",
  active: true,
};

export const NotActive = Template.bind({});
NotActive.args = {
  label: "Action",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: "Button With Long Label",
};
