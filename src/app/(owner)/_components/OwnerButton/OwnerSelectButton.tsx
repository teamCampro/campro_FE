'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import registrationStorageHandler from '../../_utils/registrationStorageHandler';
import getStorageItems from '../../_utils/getStorageItems';
import { motion } from 'framer-motion';

export type ButtonPageType =
  | 'theme'
  | 'amenities'
  | 'operating_period'
  | 'operating_days';

interface Props {
  type?: 'small';
  pageName: ButtonPageType;
  buttonText: string;
  children: ReactNode;
}

function OwnerSelectButton({ type, pageName, buttonText, children }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const primaryTypeClassName = `bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-181pxr w-340pxr rounded-2xl flex flex-col gap-8pxr justify-center items-start px-33pxr border border-gray500 ${isClicked ? 'px-32pxr' : 'hover:px-32pxr'}`;
  const smallTypeClassName = `bg-white w-170pxr h-160pxr rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-8pxr justify-center items-center px-33pxr border border-gray500 ${isClicked ? 'px-32pxr' : 'hover:px-32pxr'}`;
  const buttonClassName = type ? smallTypeClassName : primaryTypeClassName;

  const handleClickItems = () => {
    setIsClicked(!isClicked);
    registrationStorageHandler({ pageName, buttonText, isClicked });
  };

  useEffect(() => {
    const Items = getStorageItems(pageName);
    setIsClicked(Items.includes(buttonText));
  }, [pageName, buttonText]);

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <button
        style={isClicked ? { border: '2px solid black' } : {}}
        className={buttonClassName}
        onClick={handleClickItems}
      >
        {children}
        <p className='text-21pxr font-semibold'>{buttonText}</p>
      </button>
    </motion.div>
  );
}

export default OwnerSelectButton;
