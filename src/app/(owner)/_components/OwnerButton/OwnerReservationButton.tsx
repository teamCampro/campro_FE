import React, { ReactNode } from 'react';

interface Props {
  size?: 'primary' | 'large';
  type: 'accept' | 'reject' | '_';
  isDisabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

function OwnerReservationButton({
  size = 'primary',
  type = '_',
  isDisabled,
  onClick,
  children,
}: Props) {
  const buttonConfig = {
    primary:
      'w-108pxr px-24pxr py-8pxr font-caption1-semibold border hover:bg-gray100 hover:border-black',
    large: 'w-231pxr px-24pxr py-8pxr font-caption1-semibold border',

    accept: {
      bgColor: 'bg-white',
      color: 'text-primary100',
      outline: 'border-primary100',
      hover: 'hover:bg-primary100 hover:text-white',
      disabled:
        '!border-gray300 !text-gray300 hover:bg-white hover:text-gray300',
    },
    reject: {
      bgColor: 'bg-white',
      color: 'text-error',
      outline: 'border-error',
      hover: 'hover:bg-error hover:text-white',
      disabled:
        '!border-gray300 !text-gray300 hover:bg-white hover:text-gray300',
    },
    _: {
      bgColor: '',
      color: '',
      outline: '',
      hover: '',
      disabled: '',
    },
  };

  return (
    <button
      disabled={isDisabled}
      className={`rounded-md text-black ${buttonConfig[size]} ${buttonConfig[type].bgColor} ${buttonConfig[type].color} ${buttonConfig[type].outline} ${buttonConfig[type].hover} ${isDisabled && buttonConfig[type].disabled}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default OwnerReservationButton;
