import React from "react";

export default function EditButton({ handleVisible }) {
  return (
    <button className="button-add" onClick={() => handleVisible(false)}>
      Close Edit
    </button>
  );
}
