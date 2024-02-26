'use client';
import { useFormContext } from 'react-hook-form';

function ErrorMessage({
  name,
  custom,
  errorMessage,
}: {
  name: string;
  custom?: string;
  errorMessage?: string;
}) {
  const {
    formState: { errors },
  } = useFormContext();
  const message = (errors[name]?.message as string) || errorMessage;
  return message ? (
    <p className={`w-full text-red-600 ${custom && custom}`}>{message}</p>
  ) : null;
}

export default ErrorMessage;
