import React from "react";
import uniqid from "uniqid";

export default function Experience({ exp }) {
  return (
    <React.Fragment key={uniqid}>
      <div className="info-component">
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
      </div>
    </React.Fragment>
  );
}
