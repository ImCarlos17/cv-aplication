import React, { useState } from "react";
import StudyIntitutes from "../StudyInstitutes";
import uniqid from "uniqid";

import FormEditAdd from "./FormsEdit/FormEditAdd";

export default function Education() {
  const [institutes, setInstitutes] = useState([]);

  const addInstitute = (e) => {
    let institute = {
      institute: e.target.Institute.value,
      city: e.target.City.value,
      carrer: e.target.Carrer.value,
      from: e.target.fromDate.value,
      to: e.target.toDate.value,
    };
    setInstitutes([...institutes, institute]);
  };
  return (
    <React.Fragment key={uniqid()}>
      <div className="education">
        <h3 className="titles">Education</h3>
        <hr />
        {institutes.map((insitute) => {
          return <StudyIntitutes institutes={insitute} />;
        })}

        <FormEditAdd
          fields={[{ id: "Institute" }, { id: "City" }, { id: "Carrer" }]}
          addState={addInstitute}
        />
      </div>
    </React.Fragment>
  );
}
