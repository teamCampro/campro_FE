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
  nicknameValidate,
  passwordValidate,
  phoneValidate,
} from '../../_constants/inputValidate';
import SignUpCheckbox from '../checkBox/SignUpCheckBox';
import BoxChecked from '@/public/svgs/checkbox.svg';
import BoxEmpty from '@/public/svgs/checkboxEmpty.svg';
import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { signup } from '../../_data/sign/signup';
import HookFormButton from '../Button/HookFormButton';

export interface SignupInfo {
  email: string;
  phone: string;
  password: string;
  role: 'USER' | 'OWNER';
  nickname: string;
}

function SignUpForm() {
  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    email: '',
    phone: '',
    password: '',
    role: 'USER',
    nickname: '',
  });
  const signupMutation = useMutation({
    mutationFn: () => signup(signupInfo),
  });

  const setRole = (role: 'USER' | 'OWNER') => {
    setSignupInfo((prev) => ({ ...prev, role }));
  };

  const handleSubmit = () => {
    signupMutation.mutate();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    inputName: string,
  ) => {
    setSignupInfo((prev) => ({ ...prev, [inputName]: e.target.value }));
  };

  return (
    <CommonForm
      className=' flex w-full flex-col gap-48pxr '
      mode='onBlur'
      defaultValues={{ email: '', password: '', passwordCheck: '' }}
      onSubmit={() => handleSubmit()}
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
            onChange={(e) => handleChange(e, 'email')}
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
            onChange={(e) => handleChange(e, 'phone')}
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
            onChange={(e) => handleChange(e, 'nickname')}
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
            onChange={(e) => handleChange(e, 'password')}
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
            <InputContainer className='flex-center gap-8pxr'>
              <SignUpCheckbox
                name='user'
                checkedIcon={<BoxChecked />}
                uncheckedIcon={<BoxEmpty />}
                setRole={setRole}
              />
              <Label className='text-white font-body2-medium' htmlFor='user'>
                이용자
              </Label>
            </InputContainer>
            <InputContainer className='flex-center gap-8pxr'>
              <SignUpCheckbox
                name='boss'
                checkedIcon={<BoxChecked />}
                uncheckedIcon={<BoxEmpty />}
                setRole={setRole}
              />
              <Label className='text-white font-body2-medium' htmlFor='boss'>
                사용자
              </Label>
            </InputContainer>
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
