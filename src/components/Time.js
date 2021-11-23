import React, { useState, useEffect } from "react";

const Time = () => {
  const time = new Date();
  const s = time.toLocaleTimeString();
  const [timee, setTime] = useState(s);

  //   setInterval(() => {
  //     setTime(s);
  //   }, 1000);

  useEffect(() => {
    setTimeout(() => {
      setTime(s);
    }, 1000);
  });

  return (
    <div>
      <h3>{timee}</h3>
    </div>
  );
};

export default Time;
