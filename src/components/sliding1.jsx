import React, { useEffect, useState } from 'react';
import img45 from '../images/img45.png';
import img46 from '../images/img46.png';
import img47 from '../images/img47.png';
import img48 from '../images/img48.png';
import img49 from '../images/img49.jpg';
import img50 from '../images/img50.jpg';
import img51 from '../images/img51.png';
import img52 from '../images/img52.jpg';
import img53 from '../images/img53.png';
import img54 from '../images/img54.png';
import img55 from '../images/img55.jpg';
import img56 from '../images/img56.png';

const Sliding1 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const images = [
      img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56,
    ];

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56,
  ];

  return (
    <div className="w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-full">
      <img
        className="w-full h-auto animate-slide"
        src={images[slideIndex]}
        alt="Sliding Image"
      />
    </div>
  );
};

export default Sliding1;