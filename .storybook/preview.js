import React from "react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { GlobalStyle } from "../src/Styles/global";

const customViewports = {
  ...MINIMAL_VIEWPORTS,
  LaptopScreen: {
    name: "Laptop Screen",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
  LargeScreen: {
    name: "Large Screen",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
