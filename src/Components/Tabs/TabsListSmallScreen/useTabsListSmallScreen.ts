import { useState, useEffect } from "react";

export const useTabsListSmallScreen = (
  setActiveTabIndex: number,
  sliderContainerId: string,
  sliderItemsIds: string[]
) => {
  const [focusedTab, setFocusedTab] = useState<number>(setActiveTabIndex);
  const [offset, setOffset] = useState<number>(0);

  const nextSlideHandler = () => {
    if (focusedTab !== sliderItemsIds.length - 1) setFocusedTab(focusedTab + 1);
  };

  const prevSlideHandler = () => {
    if (focusedTab !== 0) setFocusedTab(focusedTab - 1);
  };

  useEffect(() => {
    //using timeout to prevent render issue (wrong calc for offset value)
    const calcSliderOffset = (): number => {
      if (sliderItemsIds.length === 0) return 0;

      let offsetSum = 0,
        sideOffset = 0;

      //calc elements width before focused item (no need for first item)
      if (focusedTab !== 0) {
        sliderItemsIds.forEach((item, index) => {
          const currentElement = document.getElementById(item);
          if (currentElement !== null && index < focusedTab) {
            offsetSum += currentElement.clientWidth;
          }
        });
      }

      //get width of the focused item in slider
      const targetElementWidth = document.getElementById(
        sliderItemsIds[focusedTab]
      )?.clientWidth;

      const sliderWidth =
        document.getElementById(sliderContainerId)?.clientWidth;

      //calc space for each side of the focused item to set it in the middle of the slider
      if (sliderWidth !== undefined && targetElementWidth !== undefined) {
        sideOffset = (sliderWidth - targetElementWidth) / 2;
      }

      return -(offsetSum - sideOffset);
    };

    const timeout = setTimeout(() => {
      setOffset(calcSliderOffset());
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, [focusedTab, sliderContainerId, sliderItemsIds]);

  return {
    focusedTab,
    offset,
    setFocusedTab,
    nextSlideHandler,
    prevSlideHandler,
  };
};
