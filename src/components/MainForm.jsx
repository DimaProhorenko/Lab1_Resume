import React from "react";
import AboutBlock from "./Blocks/AboutBlock";
import WorkBlock from "./Blocks/WorkBlock";
import HeadInput from "./HeadInput";
import SmallHeaderInput from "./SmallHeaderInput";

const MainForm = () => {
  return (
    <div className="space-y-8">
      <div>
        <HeadInput value="Dima Prokhorenko" />
        <SmallHeaderInput value="Web Developer" type="text" />
      </div>
      <AboutBlock />
      <WorkBlock />
    </div>
  );
};

export default MainForm;
