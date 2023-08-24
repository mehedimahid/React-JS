import React, { useEffect, useState, useRef } from "react";
import { Button } from "antd";

function Time() {
  const [date, setDate] = useState(new Date());
  const intervalRef = useRef();
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Time:{date.toLocaleTimeString()}</p>
      <p>
        <Button
          type="primary"
          danger
          onClick={() => {
            clearInterval(intervalRef.current);
          }}
        >
          CleanUp
        </Button>
      </p>
    </div>
  );
}
export default Time;
