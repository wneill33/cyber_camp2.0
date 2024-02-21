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
import StepEleven from "./../../base/Steps/Step11/StepEleven";
import StepTwelve from "./../../base/Steps/Step12/StepTwelve";
import StepThirteen from "./../../base/Steps/Step13/StepThirteen";
import StepFourteen from "./../../base/Steps/Step14/StepFourteen";
import StepFifteen from "./../../base/Steps/Step15/StepFifteen";
import ConfigureServer from "./../../base/ConfigureServer/ConfigureServer";

const PanelViewContent = ({
  currentLevel,
  setAllowedLevel,
  object_password,
  allowedLevel,
}) => {
  const [userPassword, setUserPassword] = useState(null);
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handleCheckpassword = () => {
    if (currentLevel === allowedLevel) {
      if (userPassword === object_password[`level${currentLevel}`]) {
        if (allowedLevel != 10) {
          setAllowedLevel(allowedLevel + 1);
        }
      }
    }
  };

  const testhandle = () => {
    console.log("current", currentLevel);
    console.log("allowed", allowedLevel);
    console.log("userpassword", userPassword);
    console.log("objectpassword", object_password[`level${currentLevel}`]);
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
        </div>
      </div>
    </div>
  );
};
export default PanelViewContent;
