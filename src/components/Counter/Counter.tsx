import React from "react";
import "./Counter.scss";

const Counter = ({ setNextIs }: any) => {
  const [count, setCount] = React.useState(4);

  /* Go to next component */
  React.useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        setNextIs("water");
      }, 2000);
    }
  }, [count]);

  /* Decrease count value */
  React.useEffect(() => {
    const handleDecreaseCount = () => {
      if (count > -1 && count <= 3) {
        setTimeout(() => {
          setCount((prev) => prev - 1);
        }, 2000);
      }
    };

    handleDecreaseCount();
  }, [count]);

  return (
    <div className="counter flexCenter">
      {count <= 3 ? (
        <h1>{count}</h1>
      ) : (
        <button className="start-button" onClick={() => setCount(3)}>
          Let's Start
        </button>
      )}
    </div>
  );
};

export default Counter;
