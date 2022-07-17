import React from "react";
import uniqid from "uniqid";

export default function StudyIntitutes({ institutes }) {
  return (
    <React.Fragment key={uniqid()}>
      <div className="info-component">
        <div className="info-component-date">
          <h4>
            {institutes.from} / {institutes.to}
          </h4>
        </div>
        <div>
          <h4>
            {institutes.institute}, {institutes.city}
          </h4>
          <bold>Carrer: {institutes.carrer}.</bold>
        </div>
      </div>
    </React.Fragment>
  );
}
