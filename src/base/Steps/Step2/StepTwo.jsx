import "./stepTwo.css";

const StepTwo = () => {
  return (
    <div className="stepTwoWrapper">
      <h1>Level 2: The Sheriff's Office</h1>
      <div className="stepTwoInstructionswrapper">
        <div className="stepTwoone"> IP: cyber@sheriffoffice Port: 3450 </div>
        <div className="stepTwoone">
          Word spreads fast in Deadwood, and soon you catch wind of a notorious
          outlaw planning something. The sheriff needs your help to gather
          information and foil the robbery. But be careful, the outlaw's gang is
          always watching. Use some of the information you found from the last
          level to know what specific words you are looking for. Password is the
          name of a hideout being rumored by one of the regulars.
        </div>
        <div className="stepTwotwo">
          Hint: dir, ls, cat, man, grep
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
