import React, { useEffect, useState } from 'react';
import img1 from '../images/img1.jpg';
import img4 from '../images/img4.jpg';
import img12 from '../images/img12.jpg';

const SlidingImage = () => {
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
    img1,
    img4,
    img12,
  ];

  return (
    <div className="w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-full ">
      <img
        className="w-full h-full animate-slide"
        src={images[slideIndex]}
        alt="Sliding Image"
      />
    </div>
  );
};

export default SlidingImage;