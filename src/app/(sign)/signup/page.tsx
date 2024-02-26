import SignUpForm from '@/components/Form/SignUpForm';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center bg-[url("/avifs/sign.avif")] bg-cover   bg-center bg-no-repeat pb-80pxr pt-30pxr   mobile:gap-40pxr mobile:px-20pxr mobile:pb-48pxr  tablet:px-100pxr '>
      <div className='m-auto mt-50pxr flex w-full max-w-533pxr flex-col items-center justify-center gap-54pxr  mobile:mt-18pxr mobile:gap-32pxr'>
        <Link
          href='/'
          className='relative h-32pxr w-193pxr mobile:h-28pxr mobile:w-169pxr'
        >
          <Image src='/logo/campro.png' alt='캠프로 로고' fill />
        </Link>
        <div className='flex w-full max-w-400pxr flex-col items-center justify-center  gap-24pxr'>
          <SignUpForm />
          <Link
            href='/signin'
            className='hover:border-b active:border-b mobile:hover:border-none mobile:active:border-none'
          >
            <p className='flex w-full items-center justify-center text-[#DFDFDF] font-body2-medium'>
              이미 이메일이있으신가요?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
