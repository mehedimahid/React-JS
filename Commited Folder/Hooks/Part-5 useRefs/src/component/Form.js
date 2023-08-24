import React, { useEffect, useRef } from "react";
import ForWardref from "./ForWardref";
function Form() {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div>
      <ForWardref ref={input} type="text" placeholder="Enter Something" />
    </div>
  );
}

export default Form;
