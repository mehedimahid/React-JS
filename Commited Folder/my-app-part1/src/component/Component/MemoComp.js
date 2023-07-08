import React from "react";

function MemoComp({ name }) {
  console.log("Rendaring Memo Component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
