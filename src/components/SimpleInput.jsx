import React, { useState } from "react";
import useInput from "./hooks/use-input";
const SimpleInput = (props) => {
  // in the hook we will happ the function that will be to do validation inside the hook
  // this helps make the hook re-usable for example input
  const {
    enteredValue: inputNameValue,
    hasError: inputNameHasError,
    inputNameHandler: inputChangeHandler,
    inputNameBlurHandler: inputBlurHandler,
  } = useInput((value) => {
    value.trim() !== "";
  });
  // used to update our state with new state
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // onchange for input

  const enteredNameIsValid = enteredName.trim() != "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputOnBlur = (e) => {
    setEnteredNameTouched(true);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
  };

  return (
    <div className="py-3 px-5 m-7 bg-gray-600 rounded-xl">
      <form onSubmit={formSubmitHandler} className="m-5 ">
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            className=""
            onChange={nameInputHandler}
            type="text"
            id="name"
            onBlur={nameInputOnBlur}
          />
          {!nameInputIsValid && (
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
