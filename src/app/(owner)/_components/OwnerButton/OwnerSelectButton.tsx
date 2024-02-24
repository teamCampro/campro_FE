'use client';
import React, { ReactNode } from 'react';
import registrationStorageHandler from '../../_utils/registrationStorageHandler';
import { motion } from 'framer-motion';

export type ButtonPageType =
  | 'amenities'
  | 'operating_period'
  | 'operating_days'
  | 'environment'
  | 'categories'
  | 'ownerOnboarding'
  | 'activities'
  | 'stayTerm';

interface Props {
  type?: 'small';
  pageName: ButtonPageType;
  buttonText: string;
  children: ReactNode;
  isSelected: boolean;
  onClick: (buttonText: string) => void;
}

function OwnerSelectButton({
  type,
  pageName,
  buttonText,
  children,
  isSelected,
  onClick,
}: Props) {
  const primaryTypeClassName = `bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-181pxr w-340pxr rounded-2xl flex flex-col gap-8pxr justify-center items-start px-33pxr border border-gray500 ${isSelected ? 'px-32pxr' : 'hover:px-32pxr'}`;
  const smallTypeClassName = `bg-white w-170pxr h-160pxr rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-8pxr justify-center items-center px-33pxr border border-gray500 ${isSelected ? 'px-32pxr' : 'hover:px-32pxr'}`;
  const buttonClassName = type ? smallTypeClassName : primaryTypeClassName;

  const handleClickItems = () => {
    registrationStorageHandler({ pageName, buttonText, isClicked: isSelected });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <button
        style={isSelected ? { border: '2px solid black' } : {}}
        className={buttonClassName}
        onClick={() => {
          handleClickItems();
          onClick(buttonText);
        }}
      >
        <div className='flex-center h-51pxr w-51pxr'>{children}</div>
        <p className='text-21pxr font-semibold'>{buttonText}</p>
      </button>
    </motion.div>
  );
}

export default OwnerSelectButton;
