import LoginForm from '@/components/Form/LoginForm';
import Image from 'next/image';
import signImage from '@/public/avifs/sign.avif';
function Page() {
  return (
    <div className='relative flex  h-screen w-full items-center justify-center'>
      <Image
        className='z-0 h-full w-full bg-cover bg-center bg-no-repeat'
        src={signImage}
        alt='로그인 페이지 배경이미지'
        priority
      />
      <div className='absolute top-0pxr flex  w-full flex-col items-center justify-center gap-56pxr px-206pxr pb-149pxr pt-102pxr'>
        <div className='flex w-full flex-col justify-center'>
          <p className='font-sign-title '>CAMPRO</p>
          <p className='font-sign-subTitle1'>
            Camping for <span className='font-sign-subTitle2'>Beginers</span>
          </p>
        </div>
        <div className='flex w-full flex-col items-center  justify-center px-194pxr'>
          <LoginForm />
          <div className=' mt-24pxr flex w-full max-w-400pxr justify-around text-gray300 font-body2'>
            <span>회원가입</span>
            <span>아이디/비밀번호 찾기</span>
          </div>
          <div className='flex-center mb-86pxr mt-84pxr flex w-full'>
            <div className='h-0pxr  w-143pxr border border-b-white'></div>
            <span className='mx-16pxr whitespace-nowrap text-white font-body1'>
              간편 로그인
            </span>
            <div className='h-0pxr w-143pxr border border-b-white'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
