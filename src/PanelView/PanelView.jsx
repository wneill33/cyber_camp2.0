import NavBar from "../base/NavBar/NavBar";
import SideBar from "../base/SideBar/SideBar";
import PanelViewContent from "./PanelViewContent/PanelViewContent";
import { useState, useEffect } from "react";
import {
  auth,
  onAuthStateChangedListener,
  getLevel,
  saveUserLevel,
} from "../base/FireBase/Firebase";

import "./panelView.css";

const PanelView = ({ Content }) => {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [allowedLevel, setAllowedLevel] = useState(null);

  const object_password = {
    level1: "one",
    level2: "two",
    level3: "three",
    level4: "four",
    level5: "five",
    level6: "six",
    level7: "seven",
    level8: "eight",
    level9: "nine",
    level10: "ten",
  };

  useEffect(() => {
    if (allowedLevel != null) {
      handleSaveLevel(allowedLevel);
    }
  }, [allowedLevel]);

  useEffect(() => {
    onAuthStateChangedListener();
    const userId = auth.currentUser?.uid;
    if (userId) {
      getLevel(userId).then((retrievedLevel) => {
        setCurrentLevel(retrievedLevel);
        setAllowedLevel(retrievedLevel);
      });
    }
  }, []);

  const handleSaveLevel = (newLevel) => {
    const userId = auth.currentUser?.uid;
    saveUserLevel(userId, newLevel);
  };

  return (
    <div className="panelViewMainWrapper">
      <div className="panelViewNavBar">
        <NavBar />
      </div>
      <div className="panelviewSideAndContentWrapper">
        <div className="panelViewSideBar">
          <SideBar
            currentLevel={currentLevel}
            allowedLevel={allowedLevel}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
        <div className="panelViewContent">
          <PanelViewContent
            setAllowedLevel={setAllowedLevel}
            allowedLevel={allowedLevel}
            currentLevel={currentLevel}
            object_password={object_password}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      </div>
    </div>
  );
};
export default PanelView;
