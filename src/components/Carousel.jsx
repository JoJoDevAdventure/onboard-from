import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

const images = [
  './bar1.jpg',
  './bar2.jpg',
  './bar3.jpg',
  './bar4.jpg',
  './bar5.jpg',
  './bar6.jpg',
  './bar7.jpg',
  './bar8.jpg',
  './bar9.jpg',
  './bar1.jpg',
  './bar2.jpg',
  './bar3.jpg',
  './bar4.jpg',
  './bar5.jpg',
  './bar6.jpg',
  './bar7.jpg',
  './bar8.jpg',
  './bar9.jpg',
  './bar1.jpg',
  './bar2.jpg',
  './bar3.jpg',
  './bar4.jpg',
  './bar5.jpg',
  './bar6.jpg',
  './bar7.jpg',
  './bar8.jpg',
  './bar9.jpg',
];

const Carousel = () => {
  const controls = useAnimation();

  const cycleImages = () => {
    controls.start({
      x: '-200%', // Adjust based on number of images
      transition: { duration: 15, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
    });
  };

  useEffect(() => {
    cycleImages();
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-72 flex justify-center items-center">
      <motion.div className="flex" animate={controls}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 md:w-[23%] w-[80%] h-full flex justify-center items-center"
          >
            <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;