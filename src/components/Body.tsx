"use client";

import { useRouter } from 'next/navigation'; // Correct import from next/navigation
import React from 'react';
import { FaHeart } from 'react-icons/fa';

export const Body: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/product/1'); // Example route when clicking on a product
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-4 gap-4 w-full overflow-hidden">
        <div className=''>
            <div className='position-relative'>
        <img 
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 1"
          onClick={handleClick} // Redirect to the product page on click
        />
        </div>
        <div className="position-absolute">
        <FaHeart/>
        </div>
        </div>
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="image2.png"
          alt="Product 2"
          onClick={() => router.push('/product/2')} // Redirect to product 2
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 3"
          onClick={() => router.push('/product/3')} // Redirect to product 3
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 4"
          onClick={() => router.push('/product/4')} // Redirect to product 4
        />
      </div>

      <div className="grid grid-cols-4 grid-rows-3 gap-4 overflow-hidden">
        <img
          className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 5"
          onClick={() => router.push('/product/5')}
        />
        <img
          className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 6"
          onClick={() => router.push('/product/6')}
        />
        <img
          className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-2 cursor-pointer"
          src="progress.png"
          alt="Product 7"
          onClick={() => router.push('/product/7')}
        />
        <img
          className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-2 cursor-pointer"
          src="purple.png"
          alt="Product 8"
          onClick={() => router.push('/product/8')}
        />
        <img
          className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 9"
          onClick={() => router.push('/product/9')}
        />
        <img
          className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 10"
          onClick={() => router.push('/product/10')}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 w-full overflow-hidden">
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 11"
          onClick={() => router.push('/product/11')}
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 12"
          onClick={() => router.push('/product/12')}
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 13"
          onClick={() => router.push('/product/13')}
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 14"
          onClick={() => router.push('/product/14')}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 w-full overflow-hidden">
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 15"
          onClick={() => router.push('/product/15')}
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 16"
          onClick={() => router.push('/product/16')}
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 17"
          onClick={() => router.push('/product/17')}
        />
        <img
          className="rounded-lg w-[244px] h-[331px] object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="promt.png"
          alt="Product 18"
          onClick={() => router.push('/product/18')}
        />
      </div>
    </div>
  );
};

