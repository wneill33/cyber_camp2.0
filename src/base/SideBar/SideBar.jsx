import "./sideBar.css";

const SideBar = ({ currentLevel, allowedLevel, setCurrentLevel }) => {
  // useEffect(() => {
  //     onAuthStateChangedListener();

  //     const userId = auth.currentUser?.uid;

  //     if (userId) {
  //       getLevel(userId).then((retrievedLevel) => {
  //         setCurrentLevel(retrievedLevel);
  //       });
  //     }
  //   }, []);

  const handleClick = (i) => {
    if (i <= allowedLevel) {
      setCurrentLevel(i);
    }
  };
  return (
    <div className="sideBarWrapperMain">
      <div className="sideBarStepWrapper">
        <div onClick={() => handleClick(0)} className="step">
          Set up Server
        </div>
        <div onClick={() => handleClick(1)} className="step">
          Step 1
        </div>
        <div onClick={() => handleClick(2)} className="step">
          Step 2
        </div>
        <div onClick={() => handleClick(3)} className="step">
          Step 3
        </div>
        <div onClick={() => handleClick(4)} className="step">
          Step 4
        </div>
        <div onClick={() => handleClick(5)} className="step">
          Step 5
        </div>
        <div onClick={() => handleClick(6)} className="step">
          Step 6
        </div>
        <div onClick={() => handleClick(7)} className="step">
          Step 7
        </div>
        <div onClick={() => handleClick(8)} className="step">
          Step 8
        </div>
        <div onClick={() => handleClick(9)} className="step">
          Step 9
        </div>
        <div onClick={() => handleClick(10)} className="step">
          Step 10
        </div>
      </div>
    </div>
  );
};
export default SideBar;
