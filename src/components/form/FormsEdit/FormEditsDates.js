import React from "react";
import uniqid from "uniqid";

export default function FromToDates() {
  return (
    <React.Fragment>
      <label htmlFor="from-date" key={uniqid()}>
        From
      </label>
      <br />
      <input type="date" id="fromDate" key={uniqid()}></input>
      <br />
      <label htmlFor="to-date" key={uniqid()}>
        To
      </label>
      <br />
      <input type="date" id="toDate" key={uniqid()}></input>
      <br />
    </React.Fragment>
  );
}
