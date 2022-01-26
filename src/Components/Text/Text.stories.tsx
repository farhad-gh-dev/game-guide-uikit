import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "UnitComponents/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
const defaultText = "This is a sample paragraph";

export const SimpleText = Template.bind({});
SimpleText.args = {
  children: defaultText,
};

export const Inline = Template.bind({});
Inline.args = {
  children: defaultText,
  isInline: true,
};

export const AsSpan = Template.bind({});
AsSpan.args = {
  children: defaultText,
  isSpan: true,
};

export const DifferentOpacity = Template.bind({});
DifferentOpacity.args = {
  children: defaultText,
  opacity: 0.5,
};

export const Sizes = () => (
  <div>
    <Text size="sm">Small: {defaultText}</Text>
    <Text size="md">Medium: {defaultText}</Text>
    <Text size="lg">Large: {defaultText}</Text>
  </div>
);

export const FontWeights = () => (
  <div>
    <Text fontWeigh="lighter">
      {defaultText} ---{">"} lighter
    </Text>
    <Text fontWeigh="normal">
      {defaultText} ---{">"} normal
    </Text>
    <Text fontWeigh="bold">
      {defaultText} ---{">"} bold
    </Text>
  </div>
);

export const Transform = () => (
  <div>
    <Text textTransform="lowercase">Lowercase: {defaultText}</Text>
    <Text textTransform="capitalize">Capitalized: {defaultText}</Text>
    <Text textTransform="uppercase">Uppercase: {defaultText}</Text>
  </div>
);