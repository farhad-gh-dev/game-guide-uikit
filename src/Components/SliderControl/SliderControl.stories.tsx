import { ComponentStory, ComponentMeta } from "@storybook/react";

import SliderControl from "./SliderControl";

export default {
  title: "Unit_Components/Slider Control",
  component: SliderControl,
} as ComponentMeta<typeof SliderControl>;

// Add container for visibility
const Template: ComponentStory<typeof SliderControl> = (args) => (
  <div
    style={{
      display: "inline-block",
      height: "500px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
      padding: "20px",
    }}
  >
    <SliderControl {...args} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  numberOfSlides: 4,
  activeSlide: 1,
};
