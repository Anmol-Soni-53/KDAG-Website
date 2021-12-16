import React from "react";
import { Tabs } from "antd";
import snowflake from "../../assets/pics/winterworkshop/snow1black.svg"

import CategoryTabs from "./CategoryTabs";

const { TabPane } = Tabs;

const DayTabs = (props) => {
  return (
    <div>
      <Tabs defaultActiveKey="1" tabPosition="left" size="large">
        {props.days.map((e) => (
          <TabPane tab={<div>
            <img src={snowflake} width={15} alt="snowflake" /> {e.day}
          </div>} key={e.id}>
            <CategoryTabs category={e.category} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default DayTabs;
