import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate

  // useEffect(() => {
  //   localStorage.setItem("email", JSON.stringify(email));
  //   localStorage.setItem("password", JSON.stringify(password));
  // }, [email, password]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setEmail([...email]);
  //   setPassword([...password]);
  //   navigate('/home')
  // };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email Address"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link"> Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
