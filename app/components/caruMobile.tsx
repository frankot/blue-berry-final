"use client";

import React, { useState, useEffect, useRef } from "react";
import st from "../styles/caruMovile.module.css";
import Image from "next/image";

interface CarouselMobileProps {
  photos: string[]; 
}

const delay = 2500;

const CarouselMobile: React.FC<CarouselMobileProps> = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => resetTimeout();
  }, [index, photos.length]); 

  return (
    <div className={`${st.slideshow} lg:hidden my-10 mx-auto`}>
      <div
        className={st.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {photos.map((imgUrl, idx) => (
          <div className={`${st.slide} relative`} key={idx}>
            <Image
              src={imgUrl}
              alt={`Climbing gym image ${idx + 1}`}
              fill={true} 
              style={{ objectFit: "cover" }} 
            />
          </div>
        ))}
      </div>

      <div className={st.slideshowDots}>
        {photos.map((_, idx) => (
          <div
            key={idx}
            className={`${st.slideshowDot} ${
              index === idx ? st.active : ""
            }`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMobile;