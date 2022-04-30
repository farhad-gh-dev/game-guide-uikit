import { ComponentStory, ComponentMeta } from "@storybook/react";

import BrandLogo from "./BrandLogo";

export default {
  title: "Unit_Components/Brand Logo",
  component: BrandLogo,
} as ComponentMeta<typeof BrandLogo>;

// Add black background for visibility
const Template: ComponentStory<typeof BrandLogo> = (args) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#000000",
      padding: "20px",
    }}
  >
    <BrandLogo {...args} />
  </div>
);

export const Standard = Template.bind({});

export const ImageOnly = Template.bind({});
ImageOnly.args = {
  imageOnly: true,
};

export const DifferentBrand = Template.bind({});
DifferentBrand.args = {
  coloredText: "hello",
  whiteText: "world",
};
