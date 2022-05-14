import React, { ReactNode } from "react";
import { StyledNavbar, StyledNavbarItem } from "./Navbar.styled";

export type NavbarProps = {
  children?: ReactNode;
  className?: string;
};

/*
 * This feature uses a nested structure.
 *
 * Navbar component wrap all the NavbarItems components (passed to the component as array).
 *
 * NavbarItem is a just a wrapper for styling, children can be link, button, ...
 */
export const Navbar: React.FC<NavbarProps> = ({
  children = "",
  className = "",
}) => {
  return <StyledNavbar className={className}>{children}</StyledNavbar>;
};

export type NavbarItemProps = {
  active: boolean;
  children?: ReactNode;
  className?: string;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  active = false,
  children = "",
  className = "",
}) => {
  return (
    <StyledNavbarItem active={active} className={className}>
      {children}
    </StyledNavbarItem>
  );
};
