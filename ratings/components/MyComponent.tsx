// MyComponent.tsx
import React from 'react';
import Image from 'next/image';
import stars from '../public/4-stars.jpeg';
import star  from '../public/5-stars.jpeg';
import thumb from '../public/thumbs.jpeg';

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="my-4 p-4 rounded-md sm:w-50 md:w-50">
        <h1 className='text-xl font-bold'>Safety</h1>
        <p className="text-gray-600 text-sm">How did you feel with Trausti ?</p>
        <Image src={star} alt="4-stars" className="w-40 h-8"/>
      </div>
      <div className="my-4 p-4 rounded-md sm:w-50 md:w-50">
        <h1 className='text-xl font-bold'>Communication</h1>
        <p className="text-gray-600 text-sm">How was the communication with Trausti ?</p>
        <Image src={stars} alt="4-stars" className="w-40 h-15"/>
      </div>
      <div className="my-4 p-4 rounded-md sm:w-50 md:w-50">
        <h1 className='text-xl font-bold'>Would you recommend Trausti?</h1>
        <p className="text-gray-600 text-sm">Your ratings will help us improve</p>
        <Image src={thumb} alt="4-stars" className="pl-2 w-40 h-15"/>
      </div>
    </div>
  );
};

export default MyComponent;
