'use client';

import {
  CommonForm,
  CommonInput,
  ErrorMessage,
  InputContainer,
  Label,
} from '@/components/index';
import { FieldValues } from 'react-hook-form';
import {
  emailValidate,
  nicknameValidate,
  passwordValidate,
  phoneValidate,
} from '../../_constants/inputValidate';
import { signup } from '../../_data/sign/signup';
import HookFormButton from '../Button/HookFormButton';
import SignUpRadio from '../radio/SignUpRadio';

export interface SignupInfo {
  email: string;
  phone: string;
  password: string;
  role: 'USER' | 'OWNER';
  nickname: string;
}

function SignUpForm() {
  const handleSubmit = (values: FieldValues) => {
    signup(values);
  };

  return (
    <CommonForm
      className=' flex w-full flex-col gap-48pxr '
      mode='onBlur'
      onSubmit={handleSubmit}
    >
      <div className='flex w-full flex-col gap-24pxr'>
        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex w-full text-gray400 font-body2-medium'
            htmlFor='email'
          >
            이메일
          </Label>
          <CommonInput
            name='email'
            placeholder='이메일을 입력해주세요'
            rules={emailValidate}
          />
          <ErrorMessage name='email' />
        </InputContainer>
        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex w-full text-gray400 font-body2-medium'
            htmlFor='phone'
          >
            휴대폰 번호
          </Label>
          <CommonInput
            name='phone'
            placeholder='휴대폰 번호를 입력해주세요'
            rules={phoneValidate}
          />
          <ErrorMessage name='phone' />
        </InputContainer>
        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex w-full text-gray400 font-body2-medium'
            htmlFor='nickname'
          >
            닉네임
          </Label>
          <CommonInput
            name='nickname'
            placeholder='닉네임을 입력해주세요'
            rules={nicknameValidate}
          />
          <ErrorMessage name='nickname' />
        </InputContainer>

        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex w-full text-gray400 font-body2-medium'
            htmlFor='password'
          >
            비밀번호
          </Label>
          <CommonInput
            name='password'
            placeholder='비밀번호를 입력해주세요'
            rules={passwordValidate}
          />
          <ErrorMessage name='password' />
        </InputContainer>
        <InputContainer className='flex  w-full flex-col gap-8pxr'>
          <Label
            className='flex w-full text-gray400 font-body2-medium'
            htmlFor='password'
          >
            비밀번호 확인
          </Label>
          <CommonInput
            name='passwordCheck'
            placeholder='비밀번호를 한번 더 입력해주세요'
          />
          <ErrorMessage name='passwordCheck' />
        </InputContainer>
        <div className=' flex w-full flex-col  text-gray300 font-body2-medium'>
          <p>가입유형</p>
          <div className=' flex justify-start gap-108pxr'>
            <SignUpRadio name='role' value='USER' labelText='이용자' />
            <SignUpRadio name='role' value='OWNER' labelText='사장님' />
          </div>
        </div>
      </div>
      <HookFormButton
        custom='flex w-full  bg-primary100 font-title3-bold text-white'
        size='md'
      >
        회원가입 완료
      </HookFormButton>
    </CommonForm>
  );
}

export default SignUpForm;
