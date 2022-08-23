import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <div className="pl-4 pr-4">
            <TheContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheLayout;
