import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomIcon from "./CustomIcon";

export default {
  title: "Unit_Components/CustomIcon",
  component: CustomIcon,
} as ComponentMeta<typeof CustomIcon>;

const Template: ComponentStory<typeof CustomIcon> = (args) => (
  <div
    style={{
      padding: "10px 15px",
      marginRight: "10px",
      backgroundColor: "black",
      display: "inline-block",
      borderRadius: "5px",
    }}
  >
    <CustomIcon {...args} />
  </div>
);

export const All = () => {
  return (
    <div>
      <Template type="shopping-card" />
      <Template type="shopping-card" strokeColor="primary" />
      <Template type="shopping-card" heightTablet="50px" />
      <Template type="bell" />
      <Template type="search" strokeColor="white" />
      <Template type="play" />
    </div>
  );
};

export const Single = Template.bind({});
Single.args = {
  type: "shopping-card",
};
