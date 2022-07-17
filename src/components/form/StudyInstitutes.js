import React from "react";
import uniqid from "uniqid";
import ButtonDelete from "./ButtonDelete";

export default function StudyIntitutes({ institutes, deleteInstitute }) {
  return (
    <React.Fragment key={uniqid()}>
      <div className="info-component" id={institutes.id}>
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
        <ButtonDelete delete={deleteInstitute} />
      </div>
    </React.Fragment>
  );
}
