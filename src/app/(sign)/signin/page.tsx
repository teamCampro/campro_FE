import LoginForm from '@/components/Form/LoginForm';
import SocialLoginButtonSet from '@/components/Button/SocialLoginButtonSet';

function Page() {
  return (
    <div className='relative  flex w-full flex-col items-center justify-center gap-56pxr  bg-[url("/avifs/sign.avif")] bg-cover bg-center bg-no-repeat pb-149pxr pt-102pxr mobile:gap-40pxr  mobile:px-20pxr mobile:pt-40pxr tablet:px-100pxr tablet:pb-124pxr tablet:pt-96pxr'>
      <div className=' flex w-full flex-col items-center justify-center'>
        <span className='line tablet:font-sign-title-tablet mobile:mobile:font-sign-title-mobile  w-full leading-none  font-sign-title'>
          CAMPRO
        </span>
        <p className='tablet:font-sign-subTitle1-tablet mobile:font-sign-subTitle1-mobile flex w-full flex-nowrap  items-center justify-center gap-12pxr whitespace-nowrap font-sign-subTitle1'>
          Camping for
          <span className='tablet:font-sign-subTitle2-tablet mobile:font-sign-subTitle2-mobile flex-center  font-sign-subTitle2'>
            Beginers
          </span>
        </p>
      </div>
      <div className='flex w-full max-w-400pxr flex-col items-center justify-center '>
        <LoginForm />
        <div className=' mt-24pxr flex w-full justify-around text-gray300 font-body2'>
          <span>회원가입</span>
          <span>아이디/비밀번호 찾기</span>
        </div>
        <div className='flex-center mb-64pxr mt-84pxr flex w-full gap-16pxr '>
          <div className='h-0pxr  w-full border border-b-white'></div>
          <span className='w-full whitespace-nowrap text-white font-body1'>
            간편 로그인
          </span>
          <div className='h-0pxr w-full border border-b-white'></div>
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-16pxr'>
          <SocialLoginButtonSet />
        </div>
      </div>
    </div>
  );
}

export default Page;
