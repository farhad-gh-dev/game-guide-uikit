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
    "https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg",
};

export const WithoutUserType = Template.bind({});
WithoutUserType.args = {
  imageSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjfXfX_Fckug1FdQJrkEzg43_kMFG4AkJqg&usqp=CAU",
};
