import React from "react";
import {
  StyledTabsListSmallScreen,
  SliderControlButton,
  TabsSlider,
  TabsWrapper,
  Tab,
} from "./TabsListSmallScreen.styled";
import { useTabsListSmallScreen } from "./useTabsListSmallScreen";
import Heading from "../../Heading/Heading";
import CustomIcon from "../../CustomIcon/CustomIcon";

export type TabsProps = {
  tabItems?: string[];
  activeTabIndex?: number;
  setActiveTabIndex?: (i: number) => void;
};

const TabsListSmallScreen: React.FC<TabsProps> = ({
  tabItems = [],
  activeTabIndex = 0,
  setActiveTabIndex = () => {},
}) => {
  const {
    focusedTab,
    offset,
    setFocusedTab,
    nextSlideHandler,
    prevSlideHandler,
  } = useTabsListSmallScreen(activeTabIndex, "tabs-nav-container", tabItems);

  const onClickTab = (index: number) => {
    setActiveTabIndex(index);
    setFocusedTab(index);
  };

  if (tabItems.length === 0) return null;

  return (
    <StyledTabsListSmallScreen>
      <SliderControlButton
        onClick={prevSlideHandler}
        isDisabled={focusedTab === 0}
        onLeft
      >
        <CustomIcon type="arrow-to-left" height="10px" />
      </SliderControlButton>

      <TabsSlider id="tabs-nav-container">
        <TabsWrapper style={{ transform: `translateX(${offset}px)` }}>
          {tabItems.map((item, index) => {
            const isLeftSideItem =
              tabItems[focusedTab - 1] !== undefined &&
              index === focusedTab - 1;

            const isRightSideItem =
              tabItems[focusedTab + 1] !== undefined &&
              index === focusedTab + 1;

            return (
              <Tab
                key={index}
                id={item}
                activeItem={activeTabIndex === index}
                focusedItem={focusedTab === index}
                isLeftSideItem={isLeftSideItem}
                isRightSideItem={isRightSideItem}
              >
                <Heading h4 onClick={() => onClickTab(index)}>
                  {item}
                </Heading>
              </Tab>
            );
          })}
        </TabsWrapper>
      </TabsSlider>

      <SliderControlButton
        onClick={nextSlideHandler}
        isDisabled={focusedTab === tabItems.length - 1}
        onRight
      >
        <CustomIcon type="arrow-to-right" height="10px" />
      </SliderControlButton>
    </StyledTabsListSmallScreen>
  );
};

export default TabsListSmallScreen;
