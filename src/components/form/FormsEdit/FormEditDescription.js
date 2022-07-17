import React, { useState } from "react";
import EditButton from "../EditBtn";

export default function FormEditDescription({ setDescription }) {
  const [visible, setVisible] = useState(false);

  const handleVisible = (value) => {
    setVisible(value);
  };

  return visible ? (
    <React.Fragment>
      <textarea
        type="text-area"
        rows="3"
        cols="30"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <EditButton handleVisible={handleVisible} />
    </React.Fragment>
  ) : (
    <button className="button-edit" onClick={() => setVisible(true)}>
      Edit
    </button>
  );
}
