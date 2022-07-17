import React, { useState } from "react";
import EditButton from "../EditBtn";

export default function FormEdit({ fields }) {
  const [visible, setVisible] = useState(false);

  const handleVisible = (state) => {
    setVisible(state);
  };

  return (
    <>
      {visible ? (
        <div className="form-edit">
          {fields.map((field) => {
            return (
              <React.Fragment key={field.id}>
                <label htmlFor={field.id}>{field.id}</label>
                <br />
                <input
                  type="text"
                  id={field.id}
                  onChange={field.onChange}
                ></input>
                <br />
              </React.Fragment>
            );
          })}

          <EditButton handleVisible={handleVisible}></EditButton>
        </div>
      ) : (
        <button className="button-edit" onClick={() => setVisible(true)}>
          Edit
        </button>
      )}
    </>
  );
}
