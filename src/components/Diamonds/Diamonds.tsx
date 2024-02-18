import "./Diamonds.scss";
import diamond from "../../assets/images/diamond1.svg";
import React from "react";

const Diamonds = () => {
  const [finalMessage, setFinalMessage] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setFinalMessage(":)  Thanks for watching . . .");
    }, 1000);
  }, []);
  return (
    <div className="diamonds flexCenter">
      <img src={diamond} className="diamond1" />
      <img src={diamond} className="diamond2" />
      <img src={diamond} className="diamond3" />
      <img src={diamond} className="diamond4" />
      <h1 className="final-message">{finalMessage}</h1>
    </div>
  );
};

export default Diamonds;
