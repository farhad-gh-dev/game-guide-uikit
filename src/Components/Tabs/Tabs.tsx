import React, { useState } from "react";
import { StyledTabs, TabsHeader, ContentContainer } from "./Tabs.styled";

export type TabsProps = {
  children?: React.ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  //   console.log(
  //     console.log(
  //       React.Children.toArray(children).filter((item) => item.type === "div")[0]
  //         .type
  //     )
  //   );
  return (
    <StyledTabs>
      <TabsHeader>
        <div>t1</div>
        <div>t2</div>
        <div>t3</div>
      </TabsHeader>

      <ContentContainer></ContentContainer>
    </StyledTabs>
  );
};

export default Tabs;
