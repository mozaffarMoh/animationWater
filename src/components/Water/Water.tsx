import "./Water.scss";
import point from "../../assets/images/water/pointBlue.png";
import faucet from "../../assets/images/water/faucet5.webp";
import { useSpring, animated } from "@react-spring/web";
import React from "react";

const Water = () => {
  const [stopFaucet, setStopFaucet] = React.useState(false);
  const [stopWater, setStopWater] = React.useState(false);
  const [pointIndex, setPointIndex] = React.useState(0);

  /* Animations for Faucet */
  const faucetStyle: any = useSpring({
    from: { position: "absolute", left: "-350px" },
    to: { position: "absolute", left: "460px" },
    config: { duration: 2000 },
    onRest: () => setStopFaucet(true),
  });

  /* Handle Hide Water Points and increase point index */
  const handleWaterPoints = () => {
    setPointIndex((prev) => (pointIndex < 3 ? prev + 1 : prev)),
      pointIndex === 3 && setStopWater(true);
  };

  /* Animations for Point */
  const pointStyle: any = stopFaucet
    ? useSpring({
        from: {
          position: "absolute",
          left: "670px",
          top: "270px",
          width: "10px",
        },
        to: { top: pointIndex === 3 ? "420px" : "500px" },
        config: { duration: pointIndex === 3 ? 1700 : 1000 },
        reset: true,
        onRest: handleWaterPoints,
      })
    : useSpring({});

  /* Show last point in big size */
  const handleShowBigPoint: any = () => {
    if (pointIndex === 3) {
      return {
        width: "80px",
        position: "absolute",
        left: "-25px",
      };
    }
  };

  return (
    <div className="water">
      <animated.div style={faucetStyle}>
        <img src={faucet} className="faucet-image" />
      </animated.div>

      {stopFaucet && !stopWater && (
        <animated.div style={pointStyle}>
          <img
            src={point}
            className="point-image"
            style={handleShowBigPoint()}
          />
        </animated.div>
      )}

      {stopWater && (
        <div className="circles flexCenter">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
      )}
    </div>
  );
};

export default Water;
