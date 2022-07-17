import React, { useState } from "react";
import FormEditDescription from "./FormsEdit/FormEditDescription";

export default function Description() {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda laborum, facere reiciendis provident minima corrupti magnam voluptatum molestias sint doloribus? Consequuntur architecto aspernatur porro neque. Repellat tempore vel vitae. Accusantium assumenda laborum, facere reiciendis provident minima corrupti magnam voluptatum molestias sint doloribus? Consequuntur architecto aspernatur porro neque. Repellat tempore"
  );

  return (
    <div className="description">
      <h3 className="titles">Description</h3>
      <hr />
      <div>- {description}</div>
      <FormEditDescription setDescription={setDescription} />
    </div>
  );
}
