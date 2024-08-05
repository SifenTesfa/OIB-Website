import React, { useEffect, useState } from 'react';
import old from '../images/old.jpg';
import old1 from '../images/old1.jpg';
import n from  "../images/n.png";

const WhoS1 = () => {
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
    old,
    old1,
    n,
  ];

  return (
    <div className="w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-full ">
      <img
        className="w-1/2 h-1/2 animate-slide"
        src={images[slideIndex]}
        alt="whos1"
      />
    </div>
  );
};

export default WhoS1;