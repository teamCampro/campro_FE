'use client';
import { useFormContext } from 'react-hook-form';

function ErrorMessage({ name }: { name: string }) {
  const {
    formState: { errors },
  } = useFormContext();
  const message = (errors[name]?.message as string) || '';

  return message ? <p className='text-red-600 '>{message}</p> : null;
}

export default ErrorMessage;
