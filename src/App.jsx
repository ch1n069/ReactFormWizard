import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        {/* <SimpleInput /> */}
        <BasicForm />
      </div>
      {/* <h2 className="text-6xl">testing tailwind</h2> */}
    </>
  );
}

export default App;
