'use client';

import { ChangeEvent } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import {
  passwordCheckValidate,
  requiredValidate,
} from '../../_constants/inputValidate';
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
  maxLength?: number;
  hasError?: boolean;
}
function CommonInput({
  name,
  type = 'text',
  placeholder,
  className,
  readOnly,
  rules = requiredValidate,
  defaultValue,
  maxLength,
  onChange,
  onBlur,
  hasError,
}: Props) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const inputCss = (isError: boolean, className?: string) =>
    `outline-0   box-border flex w-full gap-8pxr rounded-[8px] border px-16pxr py-11pxr  text-[1rem]  placeholder:text-gray400   ${isError ? '!border-red-500' : ''} ${className ? className : ''}`;

  const registerOptions = () => {
    switch (name) {
      case 'passwordCheck':
        return {
          ...passwordCheckValidate,
          validate: (value: string) =>
            value === watch('password') || '비밀번호가 일치하지 않습니다.',
        };
      default:
        return {
          ...rules,
          onChange,
          onBlur,
        };
    }
  };

  return (
    <input
      {...register(name, registerOptions())}
      type={name === 'password' || name === 'passwordCheck' ? 'password' : type}
      placeholder={placeholder}
      className={inputCss(errors[name] || hasError ? true : false, className)}
      readOnly={readOnly}
      defaultValue={defaultValue}
      autoComplete='off'
      maxLength={maxLength}
    />
  );
}

export default CommonInput;
