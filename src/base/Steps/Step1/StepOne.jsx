import "./stepOne.css";

const StepOne = () => {
  return (
    <div className="stepOneWrapper">
      <h1>Level 1: Deadwood Saloon</h1>
      <div className="stepOneInstructionswrapper">
        <div className="stepOneone">
          Upon entering Deadwood, you head straight for the saloon, hoping to
          find work or a friendly face. Inside, you encounter a rowdy crowd of
          cowboys and outlaws. Your task: gain information of the locals without
          revealing too much about yourself. Look through the files to see if
          you can find any information on them. The password will be the bolded
          information combined.
        </div>
        <div className="stepOnetwo">Hint: dir, ls, cat, man</div>
      </div>
    </div>
  );
};
export default StepOne;
