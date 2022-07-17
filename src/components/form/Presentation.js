import React, { useState } from "react";
import FormEdit from "./FormsEdit/FormEdit";
import uniqid from "uniqid";

export default function Presentation() {
  const [fullName, setFullName] = useState("Carlos Barreto");
  const [profesion, setProfesion] = useState("Lic. Admin Banking and surence");

  return (
    <React.Fragment>
      <div className="presentation">
        <div>
          <h1> {fullName}</h1>
          <h2>{profesion}</h2>
        </div>

        <div>
          <FormEdit
            fields={[
              { id: "Full Name", onChange: (e) => setFullName(e.target.value) },
              {
                id: "Profesion",
                onChange: (e) => setProfesion(e.target.value),
              },
            ]}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
