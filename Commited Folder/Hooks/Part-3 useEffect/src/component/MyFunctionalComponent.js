import React, { useEffect, useState } from "react";

function MyFunctionalComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("Timer start");
    const interval = setInterval(timer, 1000);

    //clear interval stop timer
    return () => {
      console.log("component unmounted to stop timming");
      clearInterval(interval)
    };
  }, []);

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const timer = () => {
    console.log("Timer Running");
    setDate(new Date());
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          click
        </button>
      </p>
    </div>
  );
}

export default MyFunctionalComponent;
