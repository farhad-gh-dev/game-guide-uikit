import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { fireEvent } from "@testing-library/react";

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

  await fireEvent.change(inputElement, { target: { value: "call of duty" } });

  await expect(inputElement.getAttribute("value")).toBe("call of duty");
};
