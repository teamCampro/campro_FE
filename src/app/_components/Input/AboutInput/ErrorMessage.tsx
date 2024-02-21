'use client';
import { useFormContext } from 'react-hook-form';

function ErrorMessage({ name, custom }: { name: string; custom?: string }) {
  const {
    formState: { errors },
  } = useFormContext();
  const message = (errors[name]?.message as string) || '';

  return message ? (
    <p className={`w-full text-red-600 ${custom && custom}`}>{message}</p>
  ) : null;
}

export default ErrorMessage;
