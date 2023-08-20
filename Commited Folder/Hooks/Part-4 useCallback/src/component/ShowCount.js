import React from "react";

function ShowCount({ text, count }) {
  console.log(`rendarirng ${text}....`);
  return (
    <p>
      {text} is {count}
    </p>
  );
}

export default React.memo(ShowCount);
