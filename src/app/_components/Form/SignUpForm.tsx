'use client';

import {
  Button,
  CommonForm,
  CommonInput,
  ErrorMessage,
  InputContainer,
  Label,
} from '@/components/index';
import { ChangeEvent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
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

  const { setValue } = useForm();

  const oninputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, '');
    setValue('phone', e.target.value);
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
            className='h-56pxr placeholder:!text-gray500'
          />
          <ErrorMessage name='email' />
        </InputContainer>
        <div className='flex flex-col gap-12pxr'>
          <InputContainer className='flex w-full flex-col gap-8pxr'>
            <Label
              className='flex w-full text-gray400 font-body2-medium'
              htmlFor='phone'
            >
              휴대폰 번호
            </Label>
            <CommonInput
              name='phone'
              onChange={oninputPhone}
              placeholder='휴대폰 번호를 입력해주세요'
              rules={phoneValidate}
              className='h-56pxr placeholder:!text-gray500'
              maxLength={13}
            />
            <ErrorMessage name='phone' />
          </InputContainer>
          <Button.Round
            size='sm'
            custom='bg-transparent text-gray200 border-gray200 border ml-auto !w-98pxr !h-36pxr font-caption1-semibold hover:!bg-transparent active:!bg-transparent hover:!text-gray200 active:!text-gray200 mobile:!w-73pxr'
          >
            인증<span className='mobile:hidden'>하기</span>
          </Button.Round>
        </div>
        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex w-full text-gray400 font-body2-medium'
            htmlFor='nickname'
          >
            이름
          </Label>
          <CommonInput
            name='nickname'
            placeholder='이름을 입력해주세요'
            rules={nicknameValidate}
            className='h-56pxr placeholder:!text-gray500'
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
            className='h-56pxr placeholder:!text-gray500'
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
            className='h-56pxr placeholder:!text-gray500'
          />
          <ErrorMessage name='passwordCheck' />
        </InputContainer>
        <div className=' flex w-full flex-col gap-8pxr text-gray300 font-body2-medium'>
          <p>가입유형</p>
          <div className='flex justify-start gap-108pxr'>
            <SignUpRadio name='role' value='USER' labelText='이용자' />
            <SignUpRadio name='role' value='OWNER' labelText='사장님' />
          </div>
        </div>
      </div>
      <HookFormButton
        custom='flex w-full bg-primary100 font-title3-bold text-white !h-56pxr'
        size='md'
      >
        회원가입 완료
      </HookFormButton>
    </CommonForm>
  );
}

export default SignUpForm;
