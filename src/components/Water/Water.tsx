import "./Water.scss";
import point from "../../assets/images/water/pointBlue.png";
import faucet from "../../assets/images/water/faucet5.webp";
import { useSpring, animated } from "@react-spring/web";
import React from "react";

const Water = ({ setNextIs }: any) => {
  const [stopFaucet, setStopFaucet] = React.useState(false);
  const [stopWater, setStopWater] = React.useState(false);
  const [pointIndex, setPointIndex] = React.useState(0);

  /* Animations for Faucet */
  const faucetStyle: any = useSpring({
    from: {
      width: "0%",
    },
    to: {
      width: "89%",
    },
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
          width: "100%",
          position: "relative",
          top: "-20px",
        },
        to: { top: pointIndex === 3 ? "150px" : "250px" },
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
      };
    }
  };

  React.useEffect(() => {
    if (stopWater) {
      setTimeout(() => {
        setNextIs("diamonds");
      }, 2000);
    }
  }, [stopWater]);

  return (
    <div className="water">
      {/* Start Faucet move */}(
      <animated.div style={faucetStyle} className="flexCenter">
        <img src={faucet} className="faucet-image" />
      </animated.div>
      ){/* Stop Faucet and start water */}
      {stopFaucet && !stopWater && (
        <animated.div style={pointStyle} className="flexCenter">
          <img
            src={point}
            className="point-image"
            style={handleShowBigPoint()}
          />
        </animated.div>
      )}
      {/* Stop water and start scale */}
      {stopWater && (
        <div className="circles flexCenter">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      )}
    </div>
  );
};

export default Water;
