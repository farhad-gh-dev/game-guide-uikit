import React, { ReactNode } from "react";
import { StyledButton, StyledLink } from "./Button.styled";

type Props = {
  active?: boolean;
  isLink?: boolean;
  children?: ReactNode;
} & React.ComponentProps<"button"> &
  React.ComponentProps<"a">;

/**
 * This component also accept all attributes and events of buttons and links.
 */
const Button: React.FC<Props> = (props) => {
  const { isLink = false, children = null } = props;

  let ButtonRender: any = StyledButton;
  if (isLink) {
    ButtonRender = StyledLink;
  }

  return <ButtonRender {...props}>{children}</ButtonRender>;
};

export default Button;
