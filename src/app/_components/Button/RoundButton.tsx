import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg';
  custom?: string;
}

const BUTTON_SIZE = {
  sm: 'tablet:h-62pxr w-182pxr h-64pxr flex-shrink-0 rounded-md bg-primary100 text-white font-title3-bold',
  md: 'bg-gray200 text-gray700 font-body1-medium h-64pxr w-318pxr rounded-xl',
  lg: 'bg-gray200 text-gray700 font-body1-medium h-108pxr mobile:h-64pxr w-318pxr rounded-2xl',
};

function RoundButton({
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
      className={`tabletMin:buttonHover buttonDisabled flex-center active:text-black ${BUTTON_SIZE[size]} ${custom && custom}`}
    >
      {children}
    </button>
  );
}

export default RoundButton;
