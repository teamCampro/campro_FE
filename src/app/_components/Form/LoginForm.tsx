'use client';

import {
  CommonForm,
  CommonInput,
  InputContainer,
  Label,
  Button,
  ErrorMessage,
} from '@/components/index';
import { FieldValues } from 'react-hook-form';
import {
  emailValidate,
  passwordValidate,
} from '../../_constants/inputValidate';

function LoginForm() {
  return (
    <CommonForm
      mode='onBlur'
      className=' flex w-full flex-col gap-48pxr'
      defaultValues={{ email: '', password: '' }}
      onSubmit={(data: FieldValues) => console.log(data)}
    >
      <div className='flex w-full flex-col gap-24pxr '>
        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='font-body2-medium flex text-gray400'
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
            className='font-body2-medium  flex text-gray400'
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
      </div>
      <Button.Round
        size='md'
        type='submit'
        custom='flex w-full  bg-primary100 font-title3-bold text-white'
      >
        로그인
      </Button.Round>
    </CommonForm>
  );
}

export default LoginForm;
