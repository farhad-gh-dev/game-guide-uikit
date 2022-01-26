import React, { ReactNode } from "react";
import { StyledParagraph, StyledSpan } from "./Text.styled";

type Props = {
  children?: ReactNode;
  isInline?: boolean;
  isSpan?: boolean;
  opacity?: number;
  size?: "sm" | "md" | "lg"; // sm -> m:12px, d:16px || md -> m:14px, d:18px || lg -> m:16px, d:20px
  fontWeigh?:
    | "lighter"
    | "normal"
    | "bold"
    | "bolder"
    | "300"
    | "500"
    | "700"
    | "900";
  textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
} & React.ComponentProps<"p"> &
  React.ComponentProps<"span">;

const Text: React.FC<Props> = (props) => {
  const { isSpan = false, children = null } = props;

  let TextType: any = StyledParagraph;
  if (isSpan) {
    TextType = StyledSpan;
  }

  return <TextType {...props}>{children}</TextType>;
};

export default Text;