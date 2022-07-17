import React from "react";
import Description from "./Description";
import Education from "./Education";
import Experiences from "./Experiences";

export default function SideLeft() {
  return (
    <div className="side-left">
      <Description />
      <Education />
      <Experiences />
    </div>
  );
}
