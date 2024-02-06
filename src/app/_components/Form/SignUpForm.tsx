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
  nicknameValidate,
  passwordValidate,
} from '../../_constants/inputValidate';
import SignUpCheckbox from '../checkBox/SignUpCheckBox';
import BoxChecked from '@/public/svgs/checkbox.svg';
import BoxEmpty from '@/public/svgs/checkboxEmpty.svg';
function SignUpForm() {
  return (
    <CommonForm
      className=' flex w-full flex-col gap-48pxr '
      mode='onBlur'
      defaultValues={{ email: '', password: '', passwordCheck: '' }}
      onSubmit={(data: FieldValues) => console.log(data)}
    >
      <div className='flex w-full flex-col gap-24pxr'>
        <InputContainer className='flex w-full flex-col gap-8pxr'>
          <Label
            className='flex w-full text-gray400 font-body2'
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
            className='flex w-full text-gray400 font-body2'
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
            className='flex w-full text-gray400 font-body2'
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
            className='flex w-full text-gray400 font-body2'
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
        <div className=' flex w-full flex-col  text-gray300 font-body2'>
          <p>가입유형</p>
          <div className=' flex justify-start gap-108pxr'>
            <InputContainer className='flex-center gap-8pxr'>
              <SignUpCheckbox
                name='user'
                checkedIcon={<BoxChecked />}
                uncheckedIcon={<BoxEmpty />}
              />
              <Label className='text-white font-body2' htmlFor='user'>
                이용자
              </Label>
            </InputContainer>
            <InputContainer className='flex-center gap-8pxr'>
              <SignUpCheckbox
                name='boss'
                checkedIcon={<BoxChecked />}
                uncheckedIcon={<BoxEmpty />}
              />
              <Label className='text-white font-body2' htmlFor='boss'>
                사용자
              </Label>
            </InputContainer>
          </div>
        </div>
      </div>
      <Button.Round
        size='md'
        type='submit'
        custom='flex w-full  bg-primary100 font-title3-bold text-white'
      >
        회원가입 완료
      </Button.Round>
    </CommonForm>
  );
}

export default SignUpForm;
