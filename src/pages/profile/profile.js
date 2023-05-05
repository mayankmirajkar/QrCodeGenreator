import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    age: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    num1: "",
    num2: "",
    email: "",
    bloodgroup: "",
    disability: "",
    hasallergy: "",
    allergydetails: "",
    insurancecompany: "",
    insurancenumber: "",
    password: "",
  });

  useEffect(() => {
    let storedUserProfile = localStorage.getItem("medical-form-data");

    if (storedUserProfile) {
      storedUserProfile = JSON.parse(storedUserProfile);
      setFormData({ ...storedUserProfile });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    localStorage.setItem("medical-form-data", JSON.stringify(formData));
    navigate("/showqr");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="profile-body">
        <div class="container2">
          <img
            src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?t=st=1656172984~exp=1656173584~hmac=43a2190f3d1b05e2412e48a7fc539c633968b8e4d208638717a6f458b7d71de3&amp;w=740"
            alt=""
            id="img"
          />
          <br />

          <header>
            <h2 id="id">Create E-Health Care ID</h2>
          </header>
          <hr />
          <br />
          <br />
          <h4 id="heading">Personal Details</h4>

          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <br />

            <div>
              Gender:
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                onChange={handleChange}
              />
              <label htmlFor="other">Other</label>
              <input
                type="radio"
                name="gender"
                id="other"
                value="Other"
                onChange={handleChange}
              />
            </div>
            <br />

            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="text"
                name="dob"
                id="dob"
                placeholder="Enter Date of Birth"
                value={formData.dob}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
              />
              <br />
            </div>
            <br />
            <br />
            <h4>Contact Details</h4>
            <div>
              <label htmlFor="address"> Address:</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <br />

            <div>
              <label htmlFor="district">District:</label>
              <input
                type="text"
                name="district"
                id="district"
                placeholder="Enter District"
                value={formData.district}
                onChange={handleChange}
              />
              <br />
              <br />

              <label htmlFor="state">State:</label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter State"
                value={formData.state}
                onChange={handleChange}
              />
              <br />
              <br />

              <label for="pincode">Pincode:</label>
              <input
                type="number"
                name="pincode"
                id="pincode"
                value={formData.pincode}
                placeholder="Enter Pincode"
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <label for="num1">Contact Number:</label>
              <input
                type="text"
                name="num1"
                id="num1"
                placeholder="Enter Contact Details"
                onChange={handleChange}
                value={formData.num1}
              />
            </div>
            <br />
            <div>
              <label for="num2">Another Contact Number:</label>
              <input
                type="text"
                name="num2"
                id="num2"
                placeholder="Enter Contact Details"
                value={formData.num2}
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <label for="email"> Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Enter E-mail"
                onChange={handleChange}
              />
            </div>
            <br />
            <br />

            <h4>Medical Details</h4>

            <div>
              <label for="bloodgroup">Blood Group:</label>
              <input
                type="text"
                name="bloodgroup"
                id="bloodgroup"
                value={formData.bloodgroup}
                placeholder="Enter Bloodgroup"
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <label for="bloodgroup">Disability:</label>
              <input
                type="text"
                name="disability"
                id="disability"
                value={formData.disability}
                placeholder="Any Disability"
                onChange={handleChange}
              />
            </div>
            <br />

            <div>
              Any Drug Allergy: Yes
              <input
                type="radio"
                name="hasallergy"
                value="Yes"
                id="Allergy"
                onChange={handleChange}
              />
              No
              <input
                type="radio"
                name="hasallergy"
                id=""
                value="No"
                onChange={handleChange}
              />
            </div>
            <br />

            <div>
              Allergy Details: <br />
              <textarea
                name="allergydetails"
                id="details"
                value={formData.allergydetails}
                cols="30"
                rows="10"
                placeholder="Enter Allergy Details."
                onChange={handleChange}
              ></textarea>
            </div>
            <br />
            <br />

            <h4>Insurance Details</h4>
            <div>
              <label for="ic">Insurance Company:</label>
              <input
                type="text"
                name="insurancecompany"
                id="ic"
                onChange={handleChange}
                value={formData.insurancecompany}
              />
            </div>
            <br />
            <div>
              <label for="in">Insurance Number</label>
              <input
                type="number"
                name="insurancenumber"
                id="in"
                onChange={handleChange}
                value={formData.insurancenumber}
              />
            </div>
            <br />
            <br />

            <h4> Password</h4>
            <div>
              <label for="pwd">Password:</label>
              <input
                type="text"
                id="pwd"
                name="password"
                maxlength="8"
                placeholder="Input Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <br />

            <div>
              <input
                onClick={handleSubmit}
                type="button"
                value="Show QR"
                id="submit"
              />
            </div>
            <br />
            <div>
              <input type="reset" value="Reset Form" id="reset" />
            </div>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
