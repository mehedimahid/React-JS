import React from "react";

function Title() {
  console.log("rendaring title....");
  return <h2>Now learning useCallBack tutorial</h2>;
}

export default React.memo(Title);
