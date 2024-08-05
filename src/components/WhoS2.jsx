import React, { useEffect, useState } from 'react';
import v1 from '../images/v1.jpg';
import v2 from '../images/v2.jpg';
import v3 from '../images/v3.jpg';
import v4 from '../images/v4.jpg';

const WhoS2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Increment slide index every 3 seconds
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    v1,
    v2,
    v3,
    v4,
  ];

  return (
    <div className="w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-full ">
      <img
        className="w-full h-auto animate-slide"
        src={images[slideIndex]}
        alt="whos2"
      />
    </div>
  );
};

export default WhoS2;