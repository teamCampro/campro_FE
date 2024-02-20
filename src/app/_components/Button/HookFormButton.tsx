'use client';
import { useFormContext } from 'react-hook-form';
import Button from '.';

function HookFormButton({
  className,
  onClick,
}: {
  className: string;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}) {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <Button.Round
      type='submit'
      size='sm'
      className={className}
      disabled={!isValid}
      onClick={onClick}
    >
      검색
    </Button.Round>
  );
}

export default HookFormButton;
