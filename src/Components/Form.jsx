import React from "react";
import { useState } from "react";
import "../Components/Form.css";
export default function Form() {
  const [formValue, setFormValue] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    check: "",
  });

  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!(formValue.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
    if (!(formValue.username.trim().length > 0)) {
      setUserNameError(true);
      valid = false;
    } else {
      setUserNameError(false);
    }
    if (!(formValue.email.trim().length > 0)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }
    if (!(formValue.mobile.trim().length === 10)) {
      setMobileError(true);
      valid = false;
    } else {
      setMobileError(false);
    }
    if (!formValue.check) {
      setSignUpError(true);
      valid = false;
    } else {
      setSignUpError(false);
    }
    if (valid) {
      window.localStorage.setItem("userData", JSON.stringify(formValue));
    }
  };

  return (
    <div className="formDiv1">
      <h1 className="formH1">Super App</h1>
      <p className="formP1">Create a new Account</p>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        {nameError ? <p className="error">Field Required</p> : <></>}
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        {userNameError ? <p className="error">Field Required</p> : <></>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        {mailError ? <p className="error">Field Required</p> : <></>}
        <input
          type="tel"
          placeholder="Mobile"
          name="mobile"
          onChange={handleChange}
        />
        {mobileError ? <p className="error">Field Required</p> : <></>}
        <label>
          <input
            type="checkbox"
            name="check"
            onChange={(e) =>
              setFormValue({ ...formValue, [e.target.name]: e.target.checked })
            }
          />
          Share my registration data with Superapp
        </label>
        {signUpError ? (
          <p className="error">Check this box if you want to proceed</p>
        ) : (
          <></>
        )}
        <button
          className="button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          SIgn up
        </button>
      </form>

      <footer className="footer">
        <p>
          By clicking on Sign up. you agree to Superapp
          <span style={{ color: "green" }}> Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span style={{ color: "green" }}> Privacy Policy</span>
        </p>
      </footer>
    </div>
  );
}
