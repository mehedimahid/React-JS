import React from "react";

function ForWardref({ type, placeholder }, ref) {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
}
// const forwardInput = React.forwardRef(ForWardref);
export default React.forwardRef(ForWardref);
