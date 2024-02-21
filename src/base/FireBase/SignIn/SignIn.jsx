import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../Firebase";
import { useNavigate } from "react-router-dom";

import "./signIn.css";

const SignIn = ({ setSelectedPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => alert(err.message));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSignIn();
    }
  };

  return (
    <div className="signInMainWrapper">
      <h2 className="signInHeaderWrapper">Sign In: </h2>
      <div className="signInContainer">
        Email
        <div className="emailInputBoxWrapper">
          <input
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="passwordHeaderWrapper"> Password </div>
        <div className="passwordInputBoxWrapper">
          <input
            type="password"
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            value={password}
          />
        </div>
        <div className="buttonsWrapper">
          <button className="signingInButtonWrapper" onClick={handleSignIn}>Sign In </button>
          <button className="backButtonWrapper" onClick={() => setSelectedPage(null)}>Back </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
