import React from "react";

export default function Width() {
  let [x, setX] = React.useState(window.innerWidth);
  function setWidth() {
    setX(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  });
  return (
    <div>
      <h1>Width of the View Port.</h1>
      <h2>{x}</h2>
    </div>
  );
}
