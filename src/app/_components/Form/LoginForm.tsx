'use client';

import {
  CommonForm,
  CommonInput,
  ErrorMessage,
  InputContainer,
  Label,
} from '@/components/index';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import {
  emailValidate,
  passwordValidate,
} from '../../_constants/inputValidate';
import { signin } from '../../_data/sign/signin';
import HookFormButton from '../Button/HookFormButton';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { isOpen } from '../../_slices/isOpenLoginRequiredModal';
export interface SigninInfo {
  email: string;
  password: string;
}

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const redirectUrl = useAppSelector((state) => state.redirectUrl);

  const handleSubmit = async (values: FieldValues) => {
    const message = await signin(values);
    if (message) {
      setErrorMessage(message);
    } else {
      dispatch(isOpen(false));
      router.push(redirectUrl || '/');
    }
  };

  return (
    <CommonForm
      mode='onBlur'
      className='flex w-full flex-col gap-48pxr'
      defaultValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <div className='flex w-full flex-col gap-24pxr '>
        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex text-gray400 font-body2-medium'
            htmlFor='email'
          >
            이메일
          </Label>
          <CommonInput
            onChange={(e) => {
              setErrorMessage('');
              return e.target.value;
            }}
            name='email'
            placeholder='이메일을 입력해주세요'
            rules={emailValidate}
            className='h-56pxr placeholder:!text-gray500'
            hasError={!!errorMessage}
          />
          <ErrorMessage name='email' errorMessage={errorMessage} />
        </InputContainer>

        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex text-gray400 font-body2-medium'
            htmlFor='password'
          >
            비밀번호
          </Label>
          <CommonInput
            onChange={(e) => {
              setErrorMessage('');
              return e.target.value;
            }}
            name='password'
            placeholder='비밀번호를 입력해주세요'
            rules={passwordValidate}
            className='h-56pxr placeholder:!text-gray500'
            hasError={!!errorMessage}
          />
          <ErrorMessage name='password' />
        </InputContainer>
      </div>
      <HookFormButton
        custom='flex w-full bg-primary100 font-title3-bold text-white !h-56pxr'
        size='md'
        hasError={!!errorMessage}
      >
        로그인
      </HookFormButton>
    </CommonForm>
  );
}

export default LoginForm;
