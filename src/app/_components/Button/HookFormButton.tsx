'use client';
import { ButtonHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '.';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  custom?: string;
}

function HookFormButton({ size, custom = '', children, onClick }: Props) {
  const {
    formState: { isDirty, isValid },
  } = useFormContext();
  const isDisabled = isValid && isDirty;

  return (
    <Button.Round
      type='submit'
      size={size}
      custom={custom}
      disabled={!isDisabled}
      onClick={onClick}
    >
      {children}
    </Button.Round>
  );
}

export default HookFormButton;
