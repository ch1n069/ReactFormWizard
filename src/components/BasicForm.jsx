import React, { useState } from "react";
import useInput from "./hooks/use-input";
const BasicForm = (props) => {
  const {
    enteredValue: firstNameValue,
    hasError: firstNameHasError,
    valueIsValid: firstNameIsValid,
    valueChangeHandler: firstNameValueChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredValue: secondNameValue,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameValueChangeHandler,
    inputBlurHandler: secondNameInputBlurHandler,
    reset: secondNameReset,
  } = useInput((value) => value.trim() !== "");

  // email hook
  const {
    enteredValue: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlur: emailBlurHandler,
    reset: emailReset,
    valueIsValid: emailIsValid,
  } = useInput((value) => value.includes("@"));
  let formIsValid = false;
  if (firstNameIsValid) {
    formIsValid = true;
  }
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("first name", firstNameValue);
    console.log("second name", secondNameValue);
    firstNameReset();
    secondNameReset();
    emailReset();
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            value={firstNameValue}
            type="text"
            id="name"
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameHasError && (
            <p className="text-red-500 text-sm">first name cannot be empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            value={secondNameValue}
            type="text"
            id="last name"
            onChange={secondNameValueChangeHandler}
            onBlur={secondNameInputBlurHandler}
          />
          {secondNameHasError && (
            <p className="text-red-500 text-sm">Last name cannot be empty</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="text-red-500 text-sm">Please enter the correct email</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
