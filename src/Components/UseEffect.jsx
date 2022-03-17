import React, { useState, useEffect } from "react";
let title = document.title;
console.log(title);

export default function UseEffect() {
  let [c, setC] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    if (c < 15) document.title = `New Notifications(${c})`;
    else document.title = title;
  });
  useEffect(() => {
    console.log("This will run only on initial render");
    console.log("[] means only first render.");
  }, []);
  useEffect(() => {
    console.log("Every time count changes");
  }, [c]);
  return (
    <div>
      <h1>Use Effect</h1>
      <h2>Counter: {c}</h2>
      <button onClick={() => setC(c + 1)}>Increase</button>
    </div>
  );
}
