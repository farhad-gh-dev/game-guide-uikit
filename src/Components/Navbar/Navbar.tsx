import React, { ReactNode } from "react";
import { StyledNavbar, StyledNavbarItem } from "./Navbar.styled";

type NavbarProps = {
  children?: ReactNode;
};

/**
 * This feature uses a nested structure.
 *
 * Navbar component wrap all the NavbarItems components (passed to the component as array).
 *
 * NavbarItem is a just a wrapper for styling, children can be link, button, ...
 */
export const Navbar: React.FC<NavbarProps> = ({ children = "" }) => {
  return <StyledNavbar>{children}</StyledNavbar>;
};

type NavbarItemProps = {
  active: boolean;
  children?: ReactNode;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  active = false,
  children = "",
}) => {
  return <StyledNavbarItem active={active}>{children}</StyledNavbarItem>;
};
