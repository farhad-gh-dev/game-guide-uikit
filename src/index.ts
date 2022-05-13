import * as styles from "./Styles/styles";
import { GlobalStyle } from "./Styles/global";

import Avatar, {type AvatarProps} from "./Components/Avatar/Avatar";
import BrandLogo, {type BrandLogoProps} from "./Components/BrandLogo/BrandLogo";
import Button, {type ButtonProps} from "./Components/Button/Button";
import CustomIcon, {type CustomIconProps, type IconTypes} from "./Components/CustomIcon/CustomIcon";
import Dropdown, {type DropdownProps, type DropdownItem} from "./Components/Dropdown/Dropdown";
import Heading, {type HeadingProps} from "./Components/Heading/Heading";
import ItemCard, {type ItemCardProps} from "./Components/ItemCard/ItemCard";
import { Navbar, type NavbarProps, NavbarItem, type NavbarItemProps } from "./Components/Navbar/Navbar";
import Rating, {type RatingProps} from "./Components/Rating/Rating";
import SearchBar, {type SearchBarProps} from './Components/SearchBar/SearchBar';
import Slider, {type SliderProps, type SliderItem} from './Components/Slider/Slider';
import SliderControl, {type SliderControlProps} from "./Components/SliderControl/SliderControl";
import Text, {type TextProps} from "./Components/Text/Text";

export {
    styles, 
    GlobalStyle,

    Avatar,
    AvatarProps,
    
    BrandLogo,
    BrandLogoProps,

    Button,
    ButtonProps,

    CustomIcon,
    CustomIconProps,
    IconTypes,

    Dropdown,
    DropdownProps,
    DropdownItem,

    Heading,
    HeadingProps,

    ItemCard,
    ItemCardProps,

    Navbar,
    NavbarProps,

    NavbarItem,
    NavbarItemProps,

    Rating,
    RatingProps,

    SearchBar,
    SearchBarProps,

    Slider,
    SliderProps,
    SliderItem,

    SliderControl,
    SliderControlProps,

    Text,
    TextProps
};
