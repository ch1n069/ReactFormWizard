import React, { useState } from "react";
import useInput from "./hooks/use-input";
const SimpleInput = (props) => {
  // in the hook we will happ the function that will be to do validation inside the hook
  // this helps make the hook re-usable for example input
  const {
    enteredValue: enteredName,
    isValid: inputNameIsValid,
    hasError: nameInputHasError,
    reset: resetInputName,
    valueChangeHandler: inputNameHandler,
    inputOnBlurHandler: inputNameOnBlurHandler,
  } = useInput((value) => {
    value.trim() !== "";
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // setEnteredNameTouched(true);
    if (!enteredName) {
      return;
    }
    console.log("entered name is", enteredName);
    resetInputName;
  };

  return (
    <div className="py-3 px-5 m-7 bg-gray-600 rounded-xl">
      <form onSubmit={formSubmitHandler} className="m-5 ">
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            className=""
            onChange={inputNameHandler}
            type="text"
            id="name"
            onBlur={inputNameOnBlurHandler}
          />
          {!nameInputHasError && (
            <p className="text-red-500">Input can not be empty</p>
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
