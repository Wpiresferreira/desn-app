import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BoxWeather() {
  const [data, setData] = useState(

    {
      "location": {
          "name": "Calgary",
          "region": "Alberta",
          "country": "Canada",
          "lat": 51.04,
          "lon": -114.08,
          "tz_id": "America/Edmonton",
          "localtime_epoch": 1724081705,
          "localtime": "2024-08-19 09:35"
      },
      "current": {
          "last_updated_epoch": 1724081400,
          "last_updated": "2024-08-19 09:30",
          "temp_c": 17.1,
          "temp_f": 62.8,
          "is_day": 1,
          "condition": {
              "text": "Partly cloudy",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
              "code": 1003
          },
          "wind_mph": 2.2,
          "wind_kph": 3.6,
          "wind_degree": 10,
          "wind_dir": "N",
          "pressure_mb": 1016,
          "pressure_in": 30,
          "precip_mm": 0,
          "precip_in": 0,
          "humidity": 72,
          "cloud": 25,
          "feelslike_c": 17.1,
          "feelslike_f": 62.8,
          "windchill_c": 19.7,
          "windchill_f": 67.5,
          "heatindex_c": 20.2,
          "heatindex_f": 68.4,
          "dewpoint_c": 4.4,
          "dewpoint_f": 40,
          "vis_km": 24,
          "vis_miles": 14,
          "uv": 5,
          "gust_mph": 5.8,
          "gust_kph": 9.3
      }
  }


  );
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://weatherapi-com.p.rapidapi.com/current.json?q=51.0406%2C+-114.0764";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6fa6d44963mshcf6eb887528eb62p1186f7jsn2b7638536b64",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="flex flex-col justify-center items-center w-[45vw] rounded-xl bg-color3 h-[40vw] text-color5">
      <div className="flex items-center justify-center">

      <div className="h-[60px] w-[60px]">
        <img src={data.current.condition.icon}></img>
      </div>
      <div className="text-2xl font-bold">{data.current.temp_c}ºC</div>

      </div>

      <div>{data.current.condition.text}</div>
      <div>Feels like: {data.current.feelslike_c}ºC</div>
      <div>Humidity: {data.current.humidity} %</div>
    </div>
    //     <div
    //             class="bcolor1 color1 weather"
    //             style="
    //               width: 40vw;
    //               height: 20vh;
    //               text-align: center;
    //               margin-top: 1vh;
    //               border-radius: 16px;
    //               display: flex;
    //               flex-direction: column;
    //               justify-content: center;
    //               align-items: center;
    //             "
    //           >
    //             <div
    //               style="font-size: larger; font-weight: bold; text-align: center"
    //               id="city-selected"
    //             ></div>
    //             <div
    //               style="
    //                 display: flex;
    //                 flex-direction: row;
    //                 justify-content: space-around;
    //                 align-items: center;
    //                 justify-content: center;
    //               "
    //             >
    //               <div
    //                 id="imgElement"
    //                 style="width: 5vh;height: 4vh; overflow: hidden; padding: 0"
    //               ></div>
    //               <div
    //                 style="font-size: x-large; font-weight: bold"
    //                 id="msg2"
    //               ></div>
    //             </div>
    //             <div id="msg1" style="font-weight: bold"></div>
    //             <div id="msg3"></div>
    //             <div id="msg4"></div>
    //           </div>
  );
}
