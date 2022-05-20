import * as styles from "./Styles/styles";
import { GlobalStyle } from "./Styles/global";

import Avatar, {type AvatarProps} from "./Components/Avatar/Avatar";
import BrandLogo, {type BrandLogoProps} from "./Components/BrandLogo/BrandLogo";
import Button, {type ButtonProps} from "./Components/Button/Button";
import CustomIcon, {type CustomIconProps, type IconTypes} from "./Components/CustomIcon/CustomIcon";
import Dropdown, {type DropdownProps, type DropdownItem} from "./Components/Dropdown/Dropdown";
import Heading, {type HeadingProps} from "./Components/Heading/Heading";
import ItemCard, {type ItemCardProps, type ItemCardInfo} from "./Components/ItemCard/ItemCard";
import { Navbar, type NavbarProps, NavbarItem, type NavbarItemProps } from "./Components/Navbar/Navbar";
import OfferCard, {type OfferCardProps, type offerItem} from './Components/OfferCard/OfferCard';
import Rating, {type RatingProps} from "./Components/Rating/Rating";
import SearchBar, {type SearchBarProps} from './Components/SearchBar/SearchBar';
import Slider, {type SliderProps, type SliderItem} from './Components/Slider/Slider';
import SliderControl, {type SliderControlProps} from "./Components/SliderControl/SliderControl";
import Tabs, {type TabsProps, type TabItem} from "./Components/Tabs/Tabs";
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
    ItemCardInfo,

    Navbar,
    NavbarProps,

    NavbarItem,
    NavbarItemProps,

    OfferCard, 
    OfferCardProps,
    offerItem,

    Rating,
    RatingProps,

    SearchBar,
    SearchBarProps,

    Slider,
    SliderProps,
    SliderItem,

    SliderControl,
    SliderControlProps,

    Tabs,
    TabsProps,
    TabItem,

    Text,
    TextProps
};
