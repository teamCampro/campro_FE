import LoginForm from '@/components/Form/LoginForm';
import Image from 'next/image';
import signImage from '@/public/avifs/sign.avif';
import KakaoIcon from '@/public/svgs/Kakao.svg';
import NaverIcon from '@/public/svgs/naver.svg';
import GoogleIcon from '@/public/svgs/Google.svg';

function Page() {
  return (
    <div className='relative flex h-1250pxr w-full items-center justify-center overflow-hidden'>
      <Image
        className=' z-0 h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat'
        src={signImage}
        alt='로그인 페이지 배경이미지'
        priority
      />
      <div className='absolute top-0pxr flex  w-full flex-col items-center justify-center gap-56pxr px-206pxr pb-149pxr pt-102pxr'>
        <div className='flex w-full flex-col items-center justify-center'>
          <p className='flex-center flex w-full font-sign-title '>CAMPRO</p>
          <p className='flex-center flex-nowrap gap-12pxr whitespace-nowrap font-sign-subTitle1'>
            Camping for
            <span className='font-sign-subTitle2'>Beginers</span>
          </p>
        </div>
        <div className='flex flex-col items-center justify-center px-194pxr'>
          <LoginForm />
          <div className=' mt-24pxr flex w-full justify-around text-gray300 font-body2'>
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
          <div className='flex w-full flex-col items-center justify-center gap-16pxr'>
            <button className='flex-center flex h-56pxr w-full rounded-[8px] bg-[#fee500] px-14pxr py-0pxr '>
              <KakaoIcon />
              <span className='px-86pxr font-body1'>카카오 로그인</span>
            </button>
            <button className='flex-center flex h-56pxr w-full rounded-[8px] bg-[#03C75A] px-14pxr py-0pxr '>
              <NaverIcon />
              <span className='px-86pxr font-body1'>네이버 로그인</span>
            </button>
            <button className='flex-center flex h-56pxr w-full rounded-[8px] bg-[#F2F2F2] px-14pxr py-0pxr '>
              <GoogleIcon />
              <span className='px-86pxr font-body1'>네이버 로그인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
