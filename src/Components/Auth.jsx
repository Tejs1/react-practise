import React from "react";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth-context";

export function Auth() {
  // const [pass, setPass] = useState("");
  // const [error, setError] = useState(false);
  const { handleLogin, isLoggedIn } = useAuth();
  // const navigate = useNavigate();
  // const loginHandler = () => {
  //   if (pass === "1212") {
  //     navigate("/user");
  //   } else {
  //     setPass("");
  //     setError(true);
  //   }
  // };

  return (
    <section className="auth">
      <h1>ENTRY MANTRA</h1>
      {/* <input type="password" onChange={inputHandler} value={pass} />
      <p>{pass}</p>
      <button onClick={loginHandler}>Submit</button> */}
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      {/* {error && <p>wrong pass</p>} */}
    </section>
  );

  // function inputHandler(e) {
  //   setPass(e.target.value);
  //   setError(false);
  // }
}
