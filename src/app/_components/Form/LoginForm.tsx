'use client';

import {
  CommonForm,
  CommonInput,
  InputContainer,
  Label,
  Button,
  ErrorMessage,
} from '@/components/index';
import {
  emailValidate,
  passwordValidate,
} from '../../_constants/inputValidate';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { signin } from '../../_data/sign/signin';
import HookFormButton from '../Button/HookFormButton';

export interface SigninInfo {
  email: string;
  password: string;
}

function LoginForm() {
  const [signinInfo, setSigninInfo] = useState({
    email: '',
    password: '',
  });

  const signinMutation = useMutation({
    mutationFn: () => signin(signinInfo),
  });

  const handleSubmit = () => {
    signinMutation.mutate();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    inputName: string,
  ) => {
    setSigninInfo((prev) => ({ ...prev, [inputName]: e.target.value }));
  };

  return (
    <CommonForm
      mode='onBlur'
      className=' flex w-full flex-col gap-48pxr'
      defaultValues={{ email: '', password: '' }}
      onSubmit={() => handleSubmit()}
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
            name='email'
            placeholder='이메일을 입력해주세요'
            rules={emailValidate}
            onChange={(e) => handleChange(e, 'email')}
          />
          <ErrorMessage name='email' />
        </InputContainer>

        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex  text-gray400 font-body2-medium'
            htmlFor='password'
          >
            비밀번호
          </Label>
          <CommonInput
            name='password'
            placeholder='비밀번호를 입력해주세요'
            rules={passwordValidate}
            onChange={(e) => handleChange(e, 'password')}
          />
          <ErrorMessage name='password' />
        </InputContainer>
      </div>
      <HookFormButton
        custom='flex w-full  bg-primary100 font-title3-bold text-white'
        size='md'
      >
        로그인
      </HookFormButton>
    </CommonForm>
  );
}

export default LoginForm;
