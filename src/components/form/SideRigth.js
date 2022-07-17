import React from "react";
import ProfilePicture from "./ProfilePicture";
import PersonalDetails from "./PersonalDetails";

export default function SideRight() {
  return (
    <div className="side-right">
      <ProfilePicture />
      <PersonalDetails />
    </div>
  );
}
