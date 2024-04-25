import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 12,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
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
  return (
    <div>
      <Carousel responsive={responsive} className="space-y-4">
        <div className="h-[200px] p-10 mt-10 mb-10 w-full bg-sky-200 border-sky-300 border-2 rounded-full">Item 1</div>
        <div className="h-[200px] p-10 mt-4  mb-10 w-full bg-sky-200 border-sky-300 border-2 rounded-full">Item 1</div>
        <div className="h-[200px] p-10 mt-10 mb-10 w-full bg-sky-200 border-sky-300 border-2 rounded-full">Item 1</div>
        <div className="h-[200px] p-10 mt-10 mb-10 w-full bg-sky-200 border-sky-300 border-2 rounded-full">Item 1</div>
        <div className="h-[200px] p-10 mt-10  mb-10 w-full bg-sky-200 border-sky-300 border-2 rounded-full">Item 1</div>
        <div className="h-[200px] p-10 mt-10  mb-10 w-full bg-sky-200 border-sky-300 border-2 rounded-full">Item 1</div>
        
      </Carousel>
    </div>
  );
}
