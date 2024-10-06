import React from "react";
import HeaderBox from "./HeaderBox";
import MainForm from "./MainForm";
import MainProfile from "./MainProfile";

const Viewer = () => {
  return (
    <div className="min-h-screen">
      <HeaderBox />
      <div className="container max-w-6xl  gap-8 pt-16 relative z-2 sm:flex">
        <MainProfile />
        <div className="flex-1 mt-8">
          <MainForm />
        </div>
      </div>
    </div>
  );
};

export default Viewer;
