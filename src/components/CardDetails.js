import React from "react";
import SideBar from "./SideBar";
import HomeSection from "./HomeSection";

export default function CardDetails() {
  return (
    <div className="main-container">
      <div className="aside">
        <SideBar />
      </div>
      <div className="main-content">
        <HomeSection />
      </div>
    </div>
  );
}
