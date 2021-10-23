import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [stopped, setStopped] = useState(true);

  useEffect(() => {
    if (!stopped) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [stopped, time]);

  const start = () => {
    setStopped(false);
  };
  const stop = () => {
    setStopped(true);
  };
  const reset = () => {
    setStopped(true);
    setTime(0);
  };
  return (
    <div className="timer">
      <div className="display">
        <p>{time}</p>
      </div>
      <div className="buttons">
        <div className="start">
          <button onClick={() => start()}>Start</button>
        </div>
        <div className="stop">
          <button onClick={() => stop()}>Stop</button>
        </div>
        <div className="reset">
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
