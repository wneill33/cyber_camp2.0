import { useEffect, useState } from "react";

import "./panelViewContent.css";
import StepOne from "../../base/Steps/Step1/StepOne";
import StepTwo from "../../base/Steps/Step2/StepTwo";
import StepThree from "./../../base/Steps/Step3/stepThree";
import StepFour from "./../../base/Steps/Step4/StepFour";
import StepFive from "./../../base/Steps/Step5/StepFive";
import StepSix from "./../../base/Steps/Step6/StepSix";
import StepSeven from "./../../base/Steps/Step7/StepSeven";
import StepEight from "./../../base/Steps/Step8/StepEight";
import StepNine from "./../../base/Steps/Step9/StepNine";
import StepTen from "./../../base/Steps/Step10/StepTen";
import ConfigureServer from "./../../base/ConfigureServer/ConfigureServer";

const PanelViewContent = ({
  currentLevel,
  setAllowedLevel,
  object_password,
  allowedLevel,
}) => {
  const [userPassword, setUserPassword] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  // const handleCheckpassword = () => {
  //   if (currentLevel === allowedLevel) {
  //     if (userPassword === object_password[`level${currentLevel}`]) {
  //       if (allowedLevel != 10) {
  //         setAllowedLevel(allowedLevel + 1);
  //       }
  //     }
  //   }
  // };


  // NEW SUCCES MESSAGE FOR USER TEST
  const handleCheckpassword = () => {
    if (currentLevel === allowedLevel) {
      if (userPassword === object_password[`level${currentLevel}`]) {
        setSuccessMessage("Correct answer! Moving to the next level...");
        setTimeout(() => setSuccessMessage(""), 3000); 
        setTimeout(() => {
          if (allowedLevel != 15) {
            setAllowedLevel(allowedLevel + 1);
          }
        }, 2000);
      } else {
        setSuccessMessage("Incorrect answer. Please try again.");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    }
  };

  const testhandle = () => {
    console.log("current", currentLevel);
    console.log("allowed", allowedLevel);
    console.log("userpassword", userPassword);
    console.log("objectpassword", object_password[`level${currentLevel}`]);
  };

  // New function to test the success message appearance
  const handleTestSuccessMessage = () => {
    setSuccessMessage("This is a test success message!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };


  return (
    <div className="panelViewContainer">
      <div className="panelViewContentMainWrapper">
        <div className="panelViewStepsWrapper">
          {currentLevel === 0 && (
            <div>
              <ConfigureServer />
            </div>
          )}
          {currentLevel === 1 && (
            <div>
              <StepOne />
            </div>
          )}
          {currentLevel === 2 && (
            <div>
              <StepTwo />
            </div>
          )}
          {currentLevel === 3 && (
            <div>
              <StepThree />
            </div>
          )}
          {currentLevel === 4 && (
            <div>
              <StepFour />
            </div>
          )}
          {currentLevel === 5 && (
            <div>
              <StepFive />
            </div>
          )}
          {currentLevel === 6 && (
            <div>
              <StepSix />
            </div>
          )}
          {currentLevel === 7 && (
            <div>
              <StepSeven />
            </div>
          )}
          {currentLevel === 8 && (
            <div>
              <StepEight />
            </div>
          )}
          {currentLevel === 9 && (
            <div>
              <StepNine />
            </div>
          )}
          {currentLevel === 10 && (
            <div>
              <StepTen />
            </div>
          )}
        </div>
        <div className="panelViewContentPasswordMainWrapper">
          <input
            className="inputBoxWrapper"
            onChange={handleChangePassword}
            value={userPassword}
            type="text"
          />
          <button className="button1" onClick={handleCheckpassword}>
            Submit
          </button>
          <button className="testButtonWrapper" onClick={testhandle}>Test</button>
          {/* here */}
          <button className="testButtonWrapper" onClick={handleTestSuccessMessage}>TOAST TESTER</button>
          {successMessage && <div className="successMessage">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
};
export default PanelViewContent;
