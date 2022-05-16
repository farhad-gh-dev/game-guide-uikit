import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "Unit_Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  userType: "pro",
};

export const DiffProfileImage = Template.bind({});
DiffProfileImage.args = {
  userType: "pro",
  imageSrc:
    "https://i.pinimg.com/474x/67/bc/f1/67bcf160c0643d61b6d9da16e564d96b.jpg",
};

export const WithoutUserType = Template.bind({});
WithoutUserType.args = {
  imageSrc:
    "https://static.wikia.nocookie.net/onepunchman/images/8/81/Saitama_Anime_Profile.png",
};
