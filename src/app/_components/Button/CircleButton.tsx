import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg';
  custom?: string;
}

const BUTTON_SIZE = {
  md: 'px-48pxr py-16pxr text-center text-white font-title3-semibold tablet:h-70pxr tablet:w-225pxr tablet:font-title1-semibold h-64pxr w-204pxr',
  lg: 'px-48pxr py-16pxr text-center text-white font-title3-semibold tablet:h-94pxr tablet:w-278pxr tablet:px-64pxr tablet:py-28pxr tablet:font-title1-semibold h-70pxr w-225pxr',
};

function CircleButton({
  children,
  onClick,
  disabled,
  size = 'md',
  custom = '',
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`buttonHover buttonDisabled rounded-full bg-primary100 active:text-black ${BUTTON_SIZE[size]} ${custom && custom}`}
    >
      {children}
    </button>
  );
}

export default CircleButton;
