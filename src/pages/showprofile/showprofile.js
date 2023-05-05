import React from "react";
import "./showprofile.css";

const ShowProfile = () => {
  let storedUserProfile = localStorage.getItem("medical-form-data");
  storedUserProfile = JSON.parse(storedUserProfile);

  // name
  // gender
  // dob
  // age
  // address
  // district
  // state
  // pincode
  // num1
  // num2
  // email
  // bloodgroup
  // disability
  // hasallergy
  // allergydetails
  // insurancecompany
  // insurancenumber
  // password

  return (
    <>
      <body>
        <header>
          <h1>Medical Report</h1>
        </header>
        <main>
          <div class="parent">
            <div class="wrapper">
              <ul>
                <h2>Personal Details</h2>
                <li>Name:{storedUserProfile.name}</li>
                <li>Gender:{storedUserProfile.genfer}</li>
                <li>Age:{storedUserProfile.age}</li>
                <li>Date of Birth:{storedUserProfile.dob}</li>
                <h2>Contact Details</h2>
                <li>Contact:{storedUserProfile.num1}</li>
                <li>Address:{storedUserProfile.num2}</li>
                <li>State:{storedUserProfile.state}</li>
                <li>Pincode:{storedUserProfile.pincode}</li>
                <li>Email:{storedUserProfile.email}</li>
                <h2>Medical Details</h2>
                <li>Blood Group:{storedUserProfile.bloodgroup}</li>
                <li>Disability:{storedUserProfile.disability}</li>
                <li>Any Drug Allergy:{storedUserProfile.hasallergy}</li>
                <li>Allergy Details:{storedUserProfile.allergydetails}</li>
                <h2>Insurance Details</h2>
                <li>Insurance Company:{storedUserProfile.insurancecompany}</li>
                <li>Insurance Number:{storedUserProfile.insurancenumber}</li>
              </ul>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default ShowProfile;
