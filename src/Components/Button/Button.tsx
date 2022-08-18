import React, { ReactNode } from "react";
import { StyledButton, StyledLink } from "./Button.styled";

export type ButtonProps = {
  variant?: "primary" | "primary-outlined";
  isLink?: boolean;
  children?: ReactNode;
} & React.ComponentProps<"button"> &
  React.ComponentProps<"a">;

/**
 * This component also accept all attributes and events of buttons and links.
 */
const Button: React.FC<ButtonProps> = (props) => {
  const { isLink = false, children = null } = props;

  let ButtonRender: any = StyledButton;
  if (isLink) {
    ButtonRender = StyledLink;
  }

  return <ButtonRender {...props}>{children}</ButtonRender>;
};

export default Button;
