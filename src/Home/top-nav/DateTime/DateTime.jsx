import React, { useEffect, useState } from "react";
import "./DateTime.scss";

function DateTime() {
  const [time, setTime] = useState(new Date());

  // ⏱ update using setTimeout (recursive)
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
      setTimeout(updateTime, 1000);
    };

    updateTime();
  }, []);

  // 📅 date with YEAR
  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // 🕒 time with seconds + AM/PM
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="date-time">
      <span className="date">{formattedDate}</span>
      <span className="time">{formattedTime}</span>
    </div>
  );
}

export default DateTime;
