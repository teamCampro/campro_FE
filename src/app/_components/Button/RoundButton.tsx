import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg';
  custom?: string;
}

const BUTTON_SIZE = {
  sm: 'tablet:h-62pxr desktop:w-182pxr h-64pxr flex-shrink-0 rounded-md bg-primary100 text-white font-title3-bold',
  md: 'bg-gray200 text-gray700 font-body1 h-64pxr w-318pxr rounded-[12px]',
  lg: 'bg-gray200 text-gray700 font-body1 tablet:h-108pxr h-64pxr w-318pxr rounded-[16px]',
};

function RoundButton({
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
      className={`buttonHover buttonDisabled flex-center active:text-black ${BUTTON_SIZE[size]} ${custom && custom}`}
    >
      {children}
    </button>
  );
}

export default RoundButton;
