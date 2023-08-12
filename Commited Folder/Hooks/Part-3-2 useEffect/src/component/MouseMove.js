import React, { useState, useEffect } from "react";

function MouseMove() {
  const[x, setX] = useState(0);
  const[y, setY] = useState(0);

  const logMouseMove = (e) => {
    console.log('Mouse Event')
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener("mousemove", logMouseMove);
    return ()=>{
        console.log('Component Unmounted')
        window.removeEventListener('mousemove', logMouseMove)
    }
  },[ ]);
  return (
    <div>
      Hooks X ={x} Y = {y}
    </div>
  );
}

export default MouseMove;
