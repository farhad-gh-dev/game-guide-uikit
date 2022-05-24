import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

Standard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByPlaceholderText("Search...");

  await userEvent.click(inputElement);
  await userEvent.keyboard("call of duty");

  await expect(inputElement.getAttribute("value")).toBe("call of duty");
};
