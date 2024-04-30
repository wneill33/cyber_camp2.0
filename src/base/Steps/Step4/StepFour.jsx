import "./stepFour.css";
const StepFour = () => {
  return (
    <div className="stepFourWrapper">
      <h1>Level 4: The Canyon Hideout</h1>
      <div className="stepFourInstructionswrapper">
        <div className="stepFourone">
          Following a lead, you embark on a treacherous journey into the
          canyons, where the outlaw gang is rumored to have a hideout. Your
          challenge: navigate the rugged terrain while evading traps and
          ambushes set by the outlaws. (When setting it up, you will use ls -a
          to find their hidden hideout (folder) but they will have already left
          when you get there.)
        </div>
        <div className="stepFourtwo">Hint: dir, cat, ls -a, man</div>
      </div>
    </div>
  );
};
export default StepFour;
