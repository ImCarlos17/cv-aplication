import React, { useState } from "react";
import FormEditAdd from "./FormsEdit/FormEditAdd";
import uniqid from "uniqid";
import Experience from "./Experience";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);

  const addExperience = (e) => {
    let experience = {
      position: e.target.Position.value,
      company: e.target.Company.value,
      city: e.target.City.value,
      from: e.target.fromDate.value,
      to: e.target.toDate.value,
    };

    setExperiences([...experiences, experience]);
  };

  return (
    <React.Fragment key={uniqid()}>
      <div className="experience" key={uniqid()}>
        <h3 className="titles">Experience</h3>
        <hr />
        {experiences.map((exp) => {
          return <Experience exp={exp} />;
        })}

        <FormEditAdd
          fields={[
            {
              id: "Position",
            },
            { id: "Company" },
            { id: "City" },
          ]}
          addState={addExperience}
        />
      </div>
    </React.Fragment>
  );
}
