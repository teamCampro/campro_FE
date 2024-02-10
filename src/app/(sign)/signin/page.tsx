import LoginForm from '@/components/Form/LoginForm';
import SocialLoginButtonSet from '@/components/Button/SocialLoginButtonSet';

function Page() {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center   bg-[url("/avifs/sign.avif")] bg-cover bg-center bg-no-repeat   pt-30pxr mobile:gap-40pxr mobile:px-20pxr  tablet:px-100pxr '>
      <div className='m-auto flex w-full max-w-533pxr flex-col items-center justify-center  gap-62pxr mobile:gap-32pxr'>
        <p className='line w-full leading-none font-sign-title mobile:mobile:font-sign-title-mobile  tablet:font-sign-title-tablet'>
          CAMPRO
        </p>
        <div className='flex w-full max-w-400pxr flex-col items-center justify-center '>
          <LoginForm />
          <div className=' mt-24pxr flex w-full justify-around text-gray300 font-body2-medium'>
            <span>회원가입</span>
            <span>아이디/비밀번호 찾기</span>
          </div>
          <div className='flex-center mb-50pxr mt-50pxr flex w-full gap-16pxr '>
            <div className='h-0pxr  w-full border border-b-white'></div>
            <span className=' whitespace-nowrap text-white font-body1-bold'>
              간편 로그인
            </span>
            <div className='h-0pxr w-full border border-b-white'></div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-16pxr'>
            <SocialLoginButtonSet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
