import React from "react";

export default function ButtonDelete(props) {
  return (
    <React.Fragment>
      <div>
        <button
          onClick={(e) => {
            props.delete(e.nativeEvent);
          }}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
}
