"use client";

import { useEffect, useState } from "react";
import Header1 from "../atoms/Header1";
import Sekeleton from "../atoms/Sekeleton";

function GreatingCard({ isLoading, setIsLoading }) {
  const [temperatur, setTemperatur] = useState(0);
  const [location, setLocation] = useState(null);

  var today = new Date();
  var curHr = today.getHours();
  var time = null;

  if (curHr < 12) {
    var time = "Morning";
  } else if (curHr < 18) {
    var time = "Afternoon";
  } else {
    var time = "Evening";
  }

  const getWather = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Indonesia&appid=0212c64faac9548ff5eb408f009d06b8"
    );
    const jsonData = await response.json();
    const { main, name } = jsonData;
    const { temp } = main;

    setTemperatur(temp?.toFixed());
    setLocation(name);
    setIsLoading(false);
  };

  useEffect(() => {
    getWather();
  }, []);

  return (
    <div className="w-full h-36 rounded-tl-[50px] rounded-br-[50px] bg-[url('https://www.sakuraofamerica.com/wp-content/uploads/2022/08/Back-to-School-Slider-web.jpg')] bg-cover bg-no-repeat relative overflow-clip">
      <div className="relative z-20 p-8">
        {isLoading ? (
          <Sekeleton />
        ) : (
          <Header1 className="font-medium text-white text-2xl">
            Good {time},
          </Header1>
        )}

        {isLoading ? (
          <Sekeleton className="mt-4" />
        ) : (
          <Header1 className="text-4xl text-white font-bold mt-2 relative">
            {temperatur}
            <span className="text-xl absolute">&#176;</span> C - {location}
          </Header1>
        )}
      </div>

      <div className="absolute z-10 w-full h-full top-0 left-0 bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)]" />
    </div>
  );
}

export default GreatingCard;
