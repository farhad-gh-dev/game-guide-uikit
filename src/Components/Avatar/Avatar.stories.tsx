import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "UnitComponents/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  type: "pro",
};

export const DiffProfileImage = Template.bind({});
DiffProfileImage.args = {
  type: "pro",
  imageSrc:
    "https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg",
};

export const WithoutType = Template.bind({});
WithoutType.args = {
  imageSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjfXfX_Fckug1FdQJrkEzg43_kMFG4AkJqg&usqp=CAU",
};
