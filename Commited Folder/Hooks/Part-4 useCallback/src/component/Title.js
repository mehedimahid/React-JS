import React from "react";

function Title() {
  console.log("rendaring title....");
  return <h2>Now learning useCallBack & useMemo React Hook tutorial</h2>;
}

export default React.memo(Title);
