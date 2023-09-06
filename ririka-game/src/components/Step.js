import React from "react";
import "../styles/Step.css";

const Step = ({ children, ifYes, ifNo, init }) => {
  const [visible, setVisibility] = React.useState(false);
  const [final, setFinal] = React.useState(false);
  React.useEffect(() => {
    if (init) {
      setVisibility(!visible);
    } else {
        setVisibility(false);
    }
    if (!ifNo || !ifYes) {
        console.log("nay")
      setFinal(true);
    } else{console.log("yay")}
  }, [init]);
  return (
    <>
      {visible && (
        <div>
          <div className="step">
            <p>{children}</p>
            {!final && (
              <div>
                <button onClick={ifYes} style={{backgroundColor: "green"}}>Yes</button>
                <button onClick={ifNo} style={{backgroundColor: "red"}}>No</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Step;
