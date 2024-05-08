import "./stepSeven.css";
const StepSeven = () => {
  return (
    <div className="stepSevenWrapper">
      <h1>Level 7: The Train Heist</h1>
      <div className="stepSevenInstructionswrapper">
        <div className="stepSevenone">IP: cyber@trainheist Port: 3355</div>
        <div className="stepSevenone">
          Riding the rails, you come face to face with a band of train robbers
          intent on looting the cargo. Your challenge: thwart the heist and
          ensure the safety of the passengers before the outlaws make their
          getaway.
        </div>
        <div className="stepSeventwo">
          Hint: use nmap on 'traincar' and scan the first 5000 ports
        </div>
        <div className="stepSeventwo">Hint: dir, ls, man, nmap</div>
      </div>
    </div>
  );
};
export default StepSeven;
