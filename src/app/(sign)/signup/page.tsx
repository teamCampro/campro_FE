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
  passwordCheckValidate,
} from '../../_constants/inputValidate';

function Page() {
  return (
    <div className='flex-center w-full '>
      <CommonForm
        mode='onBlur'
        defaultValues={{ email: '', password: '', passwordCheck: '' }}
        onSubmit={(data: FieldValues) => console.log(data)}
      >
        <InputContainer className='flex flex-col gap-8pxr'>
          <Label htmlFor='email'>이메일</Label>
          <CommonInput
            name='email'
            placeholder='이메일을 입력해주세요'
            rules={emailValidate}
          />
          <ErrorMessage name='email' />
        </InputContainer>

        <InputContainer className='flex flex-col gap-8pxr'>
          <Label htmlFor='password'>비밀번호</Label>
          <CommonInput
            name='password'
            placeholder='비밀번호를 입력해주세요'
            rules={passwordValidate}
          />
          <ErrorMessage name='password' />
        </InputContainer>
        <InputContainer className='flex flex-col gap-8pxr'>
          <Label htmlFor='password'>비밀번호</Label>
          <CommonInput
            name='passwordCheck'
            placeholder='비밀번호를 한번 더 입력해주세요'
          />
          <ErrorMessage name='passwordCheck' />
        </InputContainer>
        <Button.Round size='md' type='submit' custom='flex w-full'>
          회원가입
        </Button.Round>
      </CommonForm>
    </div>
  );
}

export default Page;
