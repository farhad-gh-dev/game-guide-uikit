import React from "react";
import { StyledTabsListLargeScreen, Tab } from "./TabsListLargeScreen.styled";
import Heading from "../../Heading/Heading";

export type TabsProps = {
  tabItems?: string[];
  activeTabIndex?: number;
  setActiveTabIndex?: (i: number) => void;
};

const TabsListLargeScreen: React.FC<TabsProps> = ({
  tabItems = [],
  activeTabIndex = 0,
  setActiveTabIndex = () => {},
}) => {
  if (tabItems.length === 0) return null;
  return (
    <StyledTabsListLargeScreen>
      {tabItems.map((item, index) => {
        return (
          <Tab key={item} active={activeTabIndex === index}>
            <Heading h4 onClick={() => setActiveTabIndex(index)}>
              {item}
            </Heading>
          </Tab>
        );
      })}
    </StyledTabsListLargeScreen>
  );
};

export default TabsListLargeScreen;
