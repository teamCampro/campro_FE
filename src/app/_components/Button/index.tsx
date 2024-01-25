'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: 'circle' | 'round' | 'search' | 'careCenter';
}

const BUTTON_STYLE = {
  circle: 'button-circle',
  round: 'button-round',
  search: 'button-search',
  careCenter: 'button-careCenter',
};

function Button({
  type = 'round',
  onClick = () => {},
  disabled,
  children,
}: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${BUTTON_STYLE[type]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
