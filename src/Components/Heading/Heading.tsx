import React, { ReactNode } from "react";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./Heading.style";

type Props = {
  children?: ReactNode;
  isInline?: boolean;
  /**
   * Accept a value between 0 and 1 -> EX: 0.5
   */
  opacity?: number;
  textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
  fontWeight?:
    | "lighter"
    | "normal"
    | "bold"
    | "bolder"
    | "300"
    | "500"
    | "700"
    | "900";
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
} & React.ComponentProps<"h1">;

const Heading: React.FC<Props> = (props) => {
  const { h1, h2, h3, h4, h5, h6, children = null } = props;

  let HeadingType: any = StyledH3;
  if (h1) HeadingType = StyledH1;
  if (h2) HeadingType = StyledH2;
  if (h3) HeadingType = StyledH3;
  if (h4) HeadingType = StyledH4;
  if (h5) HeadingType = StyledH5;
  if (h6) HeadingType = StyledH6;

  return <HeadingType {...props}>{children}</HeadingType>;
};

export default Heading;
