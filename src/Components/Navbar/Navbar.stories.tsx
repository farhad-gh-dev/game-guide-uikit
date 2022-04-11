import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar, NavbarItem } from "./Navbar";

export default {
  title: "UnitComponents/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const mockItems = ["home", "store", "blog", "support"];

const Template: ComponentStory<typeof Navbar> = (args) => (
  <div
    style={{
      backgroundColor: "#000000",
      height: "70px",
      display: "flex",
    }}
  >
    <Navbar {...args} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  children: mockItems.map((i, index) => {
    return (
      <NavbarItem active={index === 1}>
        <a key={i} href="/">
          {i}
        </a>
      </NavbarItem>
    );
  }),
};
