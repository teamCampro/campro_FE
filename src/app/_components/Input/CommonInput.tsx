'use client';

import { useFormContext } from 'react-hook-form';
import {
  requiredValidate,
  passwordCheckValidate,
} from '../../_constants/inputValidate';
import { RegisterOptions } from 'react-hook-form';
import { ChangeEvent } from 'react';
interface Props {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  rules?: RegisterOptions;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}
function CommonInput({
  name,
  type = 'text',
  placeholder,
  className,
  readOnly,
  rules = requiredValidate,
  defaultValue,
  onChange,
  onBlur,
}: Props) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const inputCss = (isError: boolean, className?: string) =>
    `outline-0 box-border flex w-full gap-8pxr rounded-[8px] border px-16pxr py-11pxr  text-[1rem]  placeholder:text-gray400 focus-within:border-#5534DA   ${isError ? 'border-red-500' : 'border-gray-500'} ${className ? className : ''}`;

  return (
    <input
      {...register(
        name,
        name === 'passwordCheck'
          ? {
              ...passwordCheckValidate,
              validate: (value) =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
            }
          : rules,
      )}
      type={name === 'password' || name === 'passwordCheck' ? 'password' : type}
      placeholder={placeholder}
      className={inputCss(errors[name] ? true : false, className)}
      readOnly={readOnly}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default CommonInput;
