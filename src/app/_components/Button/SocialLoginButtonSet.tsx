import KakaoIcon from '@/public/svgs/Kakao.svg';
import NaverIcon from '@/public/svgs/naver.svg';
import GoogleIcon from '@/public/svgs/Google.svg';

function SocialLoginButtonSet() {
  return (
    <>
      <button className='flex-center flex h-56pxr w-full whitespace-nowrap rounded-[8px] bg-[#fee500] px-14pxr py-0pxr '>
        <KakaoIcon />
        <span className='px-86pxr font-body1'>카카오 로그인</span>
      </button>
      <button className='flex-center flex h-56pxr w-full whitespace-nowrap rounded-[8px] bg-[#03C75A] px-14pxr  py-0pxr'>
        <NaverIcon />
        <span className='px-86pxr font-body1'>네이버 로그인</span>
      </button>
      <button className='flex-center flex h-56pxr w-full whitespace-nowrap rounded-[8px] bg-[#F2F2F2] px-14pxr  py-0pxr'>
        <GoogleIcon />
        <span className='px-86pxr font-body1'>네이버 로그인</span>
      </button>
    </>
  );
}

export default SocialLoginButtonSet;
