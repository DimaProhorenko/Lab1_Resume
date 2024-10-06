import React from "react";
import ContactBlock from "./Blocks/ContactBlock";
import EducationBlock from "./EducationBlock";
import ExpertiseBlock from "./ExpertiseBlock";
import ProfileImage from "./ProfileImage";

const MainProfile = () => {
  return (
    <div className="sm:w-2/5 border-2 border-slate-800 p-6 relative z-2 space-y-8">
      <div className="overflow-hidden max-h-80">
        <ProfileImage />
      </div>
      <ContactBlock />
      <EducationBlock />
      <ExpertiseBlock />
    </div>
  );
};

export default MainProfile;
