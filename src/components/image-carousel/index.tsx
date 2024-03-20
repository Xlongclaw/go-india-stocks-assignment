'use client'
import Image from "next/image";
import React, { useState } from "react";

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-64">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out transform" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
          {images.map((image, index) => (
            <Image key={index} src={image} width={500}
            height={500} alt={`slide-${index}`} className="w-64 h-48 object-cover" />
          ))}
        </div>
      </div>
      {/* <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full" onClick={goToPrevSlide}>&#10094;</button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full" onClick={goToNextSlide}>&#10095;</button> */}
    </div>
  );
};

export default ImageCarousel;
