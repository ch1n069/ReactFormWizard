import React, { useState } from "react";

const SimpleInput = (props) => {
  // used to update our state with new state
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState();
  // onchange for input

  const enteredNameIsValid = enteredName.trim() != "";
  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputOnBlur = () => {};
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-3 px-5 m-7 bg-gray-600 rounded-xl">
      <form onSubmit={formSubmitHandler} className="m-5 ">
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input onChange={nameInputHandler} type="text" id="name" />
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleInput;
