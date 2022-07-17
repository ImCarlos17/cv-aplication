import React, { useState } from "react";
import Presentation from "./form/Presentation";
import SideLeft from "./form/SideLeft";
import SideRight from "./form/SideRigth";

export default function CvForm() {
  return (
    <div className="form">
      <Presentation />
      <SideLeft />
      <SideRight />
    </div>
  );
}
