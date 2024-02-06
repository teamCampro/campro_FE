import KakaoIcon from '@/public/svgs/Kakao.svg';
import NaverIcon from '@/public/svgs/naver.svg';
import GoogleIcon from '@/public/svgs/Google.svg';

function SocialLoginButtonSet() {
  return (
    <>
      <button className='flex-center mobile: relative flex h-56pxr w-full whitespace-nowrap rounded-[8px] bg-[#fee500] px-14pxr py-0pxr mobile:justify-start'>
        <div className=' left-14pxr  top-0pxr flex mobile:mr-14pxr '>
          <KakaoIcon />
        </div>
        <p className='px-86pxr font-body1 mobile:m-auto mobile:px-0pxr'>
          카카오 로그인
        </p>
      </button>
      <button className='flex-center mobile: relative flex h-56pxr w-full whitespace-nowrap rounded-[8px] bg-[#03C75A] px-14pxr py-0pxr mobile:justify-start'>
        <div className=' left-14pxr  top-0pxr flex mobile:mr-14pxr '>
          <NaverIcon />
        </div>
        <p className='px-86pxr font-body1 mobile:m-auto mobile:px-0pxr'>
          네이버 로그인
        </p>
      </button>
      <button className='flex-center mobile: relative flex h-56pxr w-full whitespace-nowrap rounded-[8px]  bg-[#F2F2F2] px-14pxr py-0pxr mobile:justify-start'>
        <div className=' left-14pxr  top-0pxr flex mobile:mr-14pxr '>
          <GoogleIcon />
        </div>
        <p className='px-61pxr font-body1 mobile:m-auto mobile:px-0pxr'>
          구글 계정으로 로그인
        </p>
      </button>
    </>
  );
}

export default SocialLoginButtonSet;
