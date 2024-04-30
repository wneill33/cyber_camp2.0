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
  setCurrentLevel,
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
  useEffect(() => {
    setUserPassword(null);
  }, [currentLevel]);

  const handleNextButton = () => {
    setCurrentLevel(currentLevel + 1);
  };
  const startLevel = () => {
    setCurrentLevel(1);
  };

  return (
    <div className="panelViewContainer">
      <div className="panelViewContentMainWrapper">
        <div className="panelViewStepsWrapper">
          {currentLevel === 0 && <ConfigureServer />}
          {currentLevel === 1 && <StepOne />}
          {currentLevel === 2 && <StepTwo />}
          {currentLevel === 3 && <StepThree />}
          {currentLevel === 4 && <StepFour />}
          {currentLevel === 5 && <StepFive />}
          {currentLevel === 6 && <StepSix />}
          {currentLevel === 7 && <StepSeven />}
          {currentLevel === 8 && <StepEight />}
          {currentLevel === 9 && <StepNine />}
          {currentLevel === 10 && <StepTen />}
        </div>
        {currentLevel !== 10 && currentLevel !== 0 ? (
          <>
            {currentLevel >= allowedLevel ? (
              <div className="panelViewContentPasswordMainWrapper">
                <input
                  autoFocus
                  className="inputBoxWrapper"
                  onChange={handleChangePassword}
                  value={userPassword}
                  type="text"
                />
                <button className="button1" onClick={handleCheckpassword}>
                  Submit
                </button>
              </div>
            ) : (
              <div className="nextlevelWrapper">
                <div className="passwordtext">
                  Level passed! The password to access the next level is :{" "}
                  {object_password[`level${currentLevel}`]}
                </div>
                <button className="button1" onClick={() => handleNextButton()}>
                  Next Level
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {currentLevel !== 0 ? (
              <div className="finalmessage">
                Congrats you have beat the game!
              </div>
            ) : (
              <div>
                <button className="button1" onClick={() => startLevel()}>
                  Start Journey
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PanelViewContent;
