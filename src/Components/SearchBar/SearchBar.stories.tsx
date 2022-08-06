import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "./SearchBar";

export default {
  title: "Composed_Components/Search Bar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

// Add black background for visibility
const Template: ComponentStory<typeof SearchBar> = (args) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#8d8d8d",
      padding: "20px",
    }}
  >
    <SearchBar {...args} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  onSearch: (i) => console.log(i),
};
