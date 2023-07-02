'use client'
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Image from 'next/image';
export default function Gallery({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer); // This will clear Timeout when component unmount like in willComponentUnmount
  }, [current]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      <FiChevronLeft className="absolute left-0 text-white text-6xl m-6 z-10 cursor-pointer" onClick={prevSlide} />
      {images.map((image, index) => {
        return (
          <div className={index === current ? 'opacity-1 duration-1000 transition-opacity w-full h-full' : 'opacity-0 duration-1000 transition-opacity'} key={index}>
            {index === current && (
              <Image src={image} alt='cabin view' className='object-cover w-full h-full' width={3600} height={2400} />
            )}
          </div>
        );
      })}
      <FiChevronRight className="absolute right-0 text-white text-6xl m-6 z-10 cursor-pointer" onClick={nextSlide} />
    </div>
  );
}
