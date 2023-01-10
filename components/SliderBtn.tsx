import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

interface Props {
  direction: string;
  moveSlide: () => void;
}

export default function BtnSlider({ direction, moveSlide }: Props) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'rightArrow' : 'leftArrow'}
    >
      {direction === 'next' ? (
        <AiOutlineRight className="w-6 h-6" />
      ) : (
        <AiOutlineLeft className="w-6 h-6" />
      )}
    </button>
  );
}
