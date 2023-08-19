import React, { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  //   we check if user has touched the input or if its not valid and
  // then and only then show the error
  const hasError = !valueIsValid && isTouched;

  //   function to update the entered values in the form
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  // on blur
  const inputOnBlurHandler = (e) => {
    setIsTouched(true);
  };
  return {
    enteredValue,
    hasError,
    valueChangeHandler,
    inputOnBlurHandler,
  };
};

export default useInput;
