import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherShower  } from "react-icons/ti";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

export default function TimeLine() {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {data.length == 0 ? <h1>loading</h1>:
      <Carousel responsive={responsive}>
      {console.log(data.timelines.hourly)}
      {data.timelines.hourly.slice(36,61).map((item,index)=>(
        <div key={index} className="h-[200px] pt-10 mt-10 mb-10 w-full bg-sky-200 border-sky-300 border-2 rounded-full text-center">
          <span className="font-serif text-xl">{item.time.split('T')[1].split(":")[0] == 12 ? <span>12 PM</span> : item.time.split('T')[1].split(":")[0] > 12 ? <span>{item.time.split('T')[1].split(":")[0]-12} PM</span>:<span>{item.time.split('T')[1].split(":")[0]} AM</span>}</span>
          {Math.ceil(item.values.temperature)>22?<TiWeatherSunny className="text-5xl mt-3 mx-6 mb-2"/> : Math.ceil(item.values.temperature)>19?<TiWeatherPartlySunny className="text-5xl mt-3 mx-6 mb-2"/>:<TiWeatherShower  className="text-5xl mt-3 mx-6 mb-2" />}
          <span className="font-serif text-xl">{Math.ceil(item.values.temperature)}°C</span>
        </div>
      ))}
    </Carousel>
      }
      
    </div>
  );
}
