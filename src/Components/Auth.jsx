import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const loginHandler = () => {
    if (pass === "1212") {
      navigate("/user");
    } else {
      setPass("");
      setError(true);
    }
  };

  return (
    <section>
      <h1>ENTRY MANTRA</h1>
      <input type="password" onChange={inputHandler} value={pass} />
      <p>{pass}</p>
      <button onClick={loginHandler}>Submit</button>
      {error && <p>wrong pass</p>}
    </section>
  );

  function inputHandler(e) {
    setPass(e.target.value);
    setError(false);
  }
} 
