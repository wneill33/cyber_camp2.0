import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../Firebase";
import "./signUp.css";

const SignUp = ({ setSelectedPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({}); // New state for form errors

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password && password.length < 6) errors.password = "Password must be at least 6 characters long";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((creds) => {
          alert("Your account was created successfully! Please sign in to continue.");
          setSelectedPage("SignIn");
          console.log(creds);
        })
        .catch((error) => {
          alert("Sign up not successful");
          console.log("Sign Up Error", error);
        });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signUpMainWrapper">
      <h2 className="signUpHeaderWrapper">Sign Up</h2>
      <form className="signUpContainer" onSubmit={handleSignUp}>
        <div className="emailInputHeader"> Email* </div>
        <div className="signUpEmailInputWrapper">
          <input type="email" onChange={handleEmailChange} value={email} required />
          {formErrors.email && <div className="error">{formErrors.email}</div>}
        </div>
        <div className="passwordInputHeader"> Password* </div>
        <div className="signUpPasswordInputWrapper">
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            minLength="6"
            required
          />
          {formErrors.password && <div className="error">{formErrors.password}</div>}
        </div>
        <button type="submit" className="submitButtonWrapper">Submit</button>
        <button type="button" className="backButtonSignUpWrapper" onClick={() => setSelectedPage(null)}>Back</button>
      </form>
    </div>
  );
};

export default SignUp;
