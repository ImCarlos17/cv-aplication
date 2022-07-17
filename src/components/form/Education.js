import React, { useState } from "react";
import uniqid from "uniqid";
import FormEditAdd from "./FormsEdit/FormEditAdd";
import StudyIntitutes from "./StudyInstitutes";

export default function Education() {
  const [institutes, setInstitutes] = useState([]);

  const addInstitute = (e) => {
    let institute = {
      institute: e.target.Institute.value,
      city: e.target.City.value,
      carrer: e.target.Carrer.value,
      from: e.target.fromDate.value,
      to: e.target.toDate.value,
      id: uniqid(),
    };
    setInstitutes([...institutes, institute]);
  };

  const findedInstituteId = (e) => {
    return e.path[2].id;
  };

  const deleteInstitute = (e) => {
    const newArr = institutes.filter(
      (institute) => institute.id !== findedInstituteId(e)
    );
    setInstitutes(newArr);
  };
  return (
    <React.Fragment key={uniqid()}>
      <div className="education">
        <h3 className="titles">Education</h3>
        <hr />
        {institutes.map((insitute) => {
          return (
            <StudyIntitutes
              institutes={insitute}
              deleteInstitute={deleteInstitute}
            />
          );
        })}

        <FormEditAdd
          fields={[{ id: "Institute" }, { id: "City" }, { id: "Carrer" }]}
          addState={addInstitute}
        />
      </div>
    </React.Fragment>
  );
}
