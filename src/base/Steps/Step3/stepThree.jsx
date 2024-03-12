import "./stepThree.css";
const StepThree = () => {
  return (
    <div className="stepThreeWrapper">
      <h1>Level 3: The Canyon Hideout</h1>
      <div className="stepThreeInstructionswrapper">
        <div className="stepThreeone">
          Following a lead, you embark on a treacherous journey into the
          canyons, where the outlaw gang is rumored to have a hideout. Your
          challenge: navigate the rugged terrain while evading traps and
          ambushes set by the outlaws. (When setting it up, you will use ls -a
          to find their hidden hideout (folder) but they will have already left
          when you get there.) Password is the location of where the bandits are
          going.
        </div>
        <div className="stepThreetwo">Hint: dir, cat, ls -a, man</div>
      </div>
    </div>
  );
};
export default StepThree;
