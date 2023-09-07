import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, SecondContext } from "../App";

function ComponentE() {
  const firstName = useContext(UserContext);
  const secondName = useContext(SecondContext);
  return (
    <div>
      {firstName} -{secondName}
      <ComponentF />
    </div>
  );
}

export default ComponentE;
