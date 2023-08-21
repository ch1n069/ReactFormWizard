import React, { useState } from "react";
import useInput from "./hooks/use-input";
const SimpleInput = (props) => {
  // in the hook we will happ the function that will be to do validation inside the hook
  // this helps make the hook re-usable for example input

  //
  const {
    enteredValue: enteredName,
    hasError: nameHasError,
    isValid: enteredNameIsValid,
    reset: nameInputReset,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // setEnteredNameTouched(true);
    // if (!enteredNameIsValid) {
    //   return;
    // }

    console.log("entered name", enteredName);
    // setEnteredNameTouched(true);
    // setEnteredName("");
    // setEnteredNameTouched(false);
    nameInputReset();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <div className="py-3 px-5 m-7 rounded-xl">
      <form onSubmit={formSubmitHandler} className="m-5 ">
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            className=""
            onChange={nameChangeHandler}
            type="text"
            id="name"
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="text-red-500 text-sm">Input field cannot be emtpy</p>
          )}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleInput;
