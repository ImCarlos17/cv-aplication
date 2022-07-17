import React, { useState } from "react";
import EditButton from "../EditBtn";
import AddBtn from "../AddBtn";
import FromToDates from "./FormEditsDates";

export default function FormEditAdd({ fields, addState }) {
  const [visible, setVisible] = useState(false);

  const handleVisible = (state) => {
    setVisible(state);
  };

  return (
    <>
      {visible ? (
        <form
          className="form-add"
          onSubmit={(e) => {
            e.preventDefault();
            addState(e);
            e.target.reset();
            handleVisible(false);
          }}
        >
          {fields.map((field) => {
            return (
              <React.Fragment key={field.id}>
                <label htmlFor={field.id}>{field.id}</label>
                <br />
                <input type="text" id={field.id}></input>
                <br />
              </React.Fragment>
            );
          })}
          <FromToDates />

          <AddBtn>Add</AddBtn>
          <EditButton handleVisible={handleVisible}></EditButton>
        </form>
      ) : (
        <button className="button-add" onClick={() => setVisible(true)}>
          Add Experience
        </button>
      )}
    </>
  );
}
