'use client';

import { useFormContext } from 'react-hook-form';
import { requiredValidate } from '../../_constants/inputValidate';
import { RegisterOptions } from 'react-hook-form';
interface Props {
  name: string;
  type?: string;
  placeholder: string;
  className: string;
  readOnly?: boolean;
  rules?: RegisterOptions;
}
function CommonInput({
  name,
  type = 'text',
  placeholder,
  className,
  readOnly,
  rules = requiredValidate,
}: Props) {
  const { register } = useFormContext();
  return (
    <input
      {...register(name, rules)}
      type={type}
      placeholder={placeholder}
      className={className}
      readOnly={readOnly}
    />
  );
}

export default CommonInput;
