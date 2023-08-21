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
  const {} = useInput((value) => value.includes("@"));
  let formIsValid = false;
  if (firstNameIsValid) {
    formIsValid = true;
  }
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("first name", firstNameValue);
    console.log("second name");
    firstNameReset();
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
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
            type="text"
            id="name"
            onChange={secondNameValueChangeHandler}
            onBlur={secondNameValueChangeHandler}
          />
          {secondNameHasError && (
            <p className="text-red-500 text-sm">first name cannot be empty</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
