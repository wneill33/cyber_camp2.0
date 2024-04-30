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
    level1: "gangplanningheist",
    level2: "canyonhideout",
    level3: "oasis",
    level4: "thebank",
    level5: "jailcell",
    level6: "three",
    level7: "access",
    level8: "cyber",
    level9: "vault2",
    level10: "owenquickdrawokeefe",
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
