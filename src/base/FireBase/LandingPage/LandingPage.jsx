import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { useState } from "react";


import "./landingPage.css";

const LandingPage = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleSignIn = () => {
    setSelectedPage("SignIn");
  };

  const handleSignUp = () => {
    setSelectedPage("SignUp");
  };

  return (
    <div className="landingPageMainWrapper">
      <div className="landingPageHeader">
        <h1>CYBER~CAMP</h1>
      </div>
      <div className="landingPageContent">
        <div className={`buttonsContentWrapper ${ 
          selectedPage === "SignIn" ? 'expanded' : selectedPage === "SignUp" ? 'shrink' : '' }`}> 
        {!selectedPage ? (
          <>
          <div className="signInButtonWrapper"> Already have an account? </div>
            <button onClick={handleSignIn} className="signInButton">
              Sign In
            </button>
            <div className="signUpButtonWrapper"> Don't have an account? </div>
            <button onClick={handleSignUp} className="signUpButton">
              Create Account
            </button>
          </>
        ) : (
          <>
            {selectedPage === "SignIn" && (
              <>
                <SignIn setSelectedPage={setSelectedPage} />
              </>
            )}
            {selectedPage === "SignUp" && (
              <>
                <SignUp setSelectedPage={setSelectedPage} />
              </>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
