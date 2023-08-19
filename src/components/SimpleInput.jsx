import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState();
  // onchange for input
  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };
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
