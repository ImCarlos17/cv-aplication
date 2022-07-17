import React from "react";
import uniqid from "uniqid";
import ButtonDelete from "./ButtonDelete";

export default function Experience({ exp, deleteExperiencie }) {
  return (
    <React.Fragment key={uniqid}>
      <div className="info-component" id={exp.id}>
        <div className="info-component-date">
          <h4>
            {exp.from} / {exp.to}
          </h4>
        </div>
        <div>
          <h4>{exp.position}</h4>
          <bold>
            {exp.company}, {exp.city}.
          </bold>
        </div>
        <ButtonDelete delete={deleteExperiencie} />
      </div>
    </React.Fragment>
  );
}
