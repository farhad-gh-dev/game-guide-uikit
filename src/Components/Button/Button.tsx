import React from "react";
import StyledButton from "./Button.styled";

interface Props {
  label?: string;
  active?: boolean;
}

const Button: React.FC<Props> = ({ label = "Button", active = false }) => {
  return (
    <StyledButton active={active} title={label}>
      {label}
    </StyledButton>
  );
};

export default Button;
