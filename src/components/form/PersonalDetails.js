import React, { useState } from "react";
import FormEdit from "./FormsEdit/FormEdit";

export default function PersonalDetails() {
  const [adress, setAdress] = useState("Urb. Lagunita Etapa II");
  const [phoneNumber, setPhoneNumber] = useState("(+55) 438-852-586");
  const [email, setEmail] = useState("example@gmail.com");
  const [gitHub, setGitHub] = useState("UserGit22");
  const [linkedin, setLinkedin] = useState("UserLinkedin33");

  return (
    <React.Fragment>
      <div className="personal-details">
        <h3>Personal Details</h3>
        <hr />
        <h4>Adress: {adress}</h4>
        <h4>Phone Number: {phoneNumber}</h4>
        <h4>Email: {email}</h4>
        <h4>GitHub: {gitHub}</h4>
        <h4>Linkedin: {linkedin}</h4>
      </div>

      <div>
        <FormEdit
          fields={[
            { id: "Adress", onChange: (e) => setAdress(e.target.value) },
            {
              id: "PhoneNumber",
              onChange: (e) => setPhoneNumber(e.target.value),
            },
            { id: "Email", onChange: (e) => setEmail(e.target.value) },
            { id: "GitHub", onChange: (e) => setGitHub(e.target.value) },
            { id: "Linkedin", onChange: (e) => setLinkedin(e.target.value) },
          ]}
        />
      </div>
    </React.Fragment>
  );
}
