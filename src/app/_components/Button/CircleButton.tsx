import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg';
  custom?: string;
}

const BUTTON_SIZE = {
  md: 'px-48pxr py-16pxr text-center text-white mobile:font-title3-semibold h-70pxr w-225pxr font-title1-semibold mobile:h-64pxr mobile:w-204pxr',
  lg: 'mobile:px-48pxr mobile:py-16pxr text-center text-white mobile:font-title3-semibold h-94pxr w-278pxr px-64pxr py-28pxr font-title1-semibold mobile:h-70pxr mobile:w-225pxr',
};

function CircleButton({
  type = 'button',
  children,
  onClick,
  disabled,
  size = 'md',
  custom = '',
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`buttonHover buttonDisabled rounded-full bg-primary100 active:text-black ${BUTTON_SIZE[size]} ${custom && custom}`}
    >
      {children}
    </button>
  );
}

export default CircleButton;
