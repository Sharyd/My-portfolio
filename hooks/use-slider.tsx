import React, { useState } from 'react';

const useSlider = (lastItem: number) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== lastItem) {
      setSlideIndex(prev => prev + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(prev => prev - 1);
    } else {
      setSlideIndex(lastItem);
    }
  };

  return {
    setSlideIndex,
    prevSlide,
    nextSlide,
    slideIndex,
  };
};

export default useSlider;
