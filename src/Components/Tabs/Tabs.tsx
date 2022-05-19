import React, { useState } from "react";
import { StyledTabs, TabContent } from "./Tabs.styled";
import TabsListSmallScreen from "./TabsListSmallScreen/TabsListSmallScreen";
import TabsListLargeScreen from "./TabsListLargeScreen/TabsListLargeScreen";

export type TabItem = {
  tabTitle: string;
  tabContent?: React.ReactNode;
};

export type TabsProps = {
  tabItems?: TabItem[];
  defaultActiveIndex?: number;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabItems = [],
  defaultActiveIndex = 0,
  className = "",
}) => {
  const [activeTabIndex, setActiveTabIndex] =
    useState<number>(defaultActiveIndex);

  if (tabItems.length === 0) return null;
  return (
    <StyledTabs className={className}>
      <TabsListSmallScreen
        tabItems={tabItems.map((item) => item.tabTitle)}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={(i) => setActiveTabIndex(i)}
      />
      <TabsListLargeScreen
        tabItems={tabItems.map((item) => item.tabTitle)}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />

      <TabContent>{tabItems[activeTabIndex].tabContent}</TabContent>
    </StyledTabs>
  );
};
export default Tabs;
