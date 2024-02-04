'use client';

import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  className?: string;
  readOnly?: boolean;
}

function CommonInput({
  name,
  type = 'text',
  placeholder,
  className,
  readOnly,
}: Props) {
  const { register } = useFormContext();
  return (
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={className}
      readOnly={readOnly}
    />
  );
}

export default CommonInput;
