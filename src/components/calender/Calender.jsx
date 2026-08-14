import React, { useEffect, useState } from "react";
import Window from "../../windows/Windows";

function Calender({ windowName, setWindowState }) {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(new Date());

  // ⏰ time update
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🌦 weather fetch
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Dehradun&units=metric&appid=YOUR_API_KEY",
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Window
      title="Calender"
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <div style={{ padding: "15px", color: "white" }}>
        {/* ⏰ Time */}
        <h2>{time.toLocaleTimeString()}</h2>
        <p>{time.toDateString()}</p>

        {/* 🌦 Weather */}
        {weather ? (
          <>
            <h3>{weather.name}</h3>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].description}</p>
          </>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>
    </Window>
  );
}

export default Calender;
