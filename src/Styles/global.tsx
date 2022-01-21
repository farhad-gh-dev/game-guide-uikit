import { createGlobalStyle, css } from "styled-components";
import { color, typography, breakpoint } from "./styles";
import "./fonts/index.scss";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.text_14};
  color: ${color.darkest};

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.bold};
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: ${typography.size.text_22};
  }
  h3 {
    font-size: ${typography.size.text_18};
  }

  @media (min-width: ${breakpoint.laptopScreen}px) {
    h2 {
      font-size: ${typography.size.text_28};
    }
    h3 {
      font-size: ${typography.size.text_22};
    }
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
    border: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  pre {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.text_14}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (min-width: ${breakpoint.laptopScreen}px) {
    pre {
      font-size: ${typography.size.text_18}px;
    }
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
