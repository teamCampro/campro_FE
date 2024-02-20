'use client';
import { useFormContext } from 'react-hook-form';
import Button from '.';
import { ButtonHTMLAttributes } from 'react';

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
      {children}
    </Button.Round>
  );
}

export default HookFormButton;