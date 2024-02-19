import SignUpForm from '@/components/Form/SignUpForm';
import Link from 'next/link';

function Page() {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center   bg-[url("/avifs/sign.avif")] bg-cover bg-center bg-no-repeat   pt-30pxr mobile:gap-40pxr mobile:px-20pxr  tablet:px-100pxr '>
      <div className='m-auto flex w-full max-w-533pxr flex-col items-center justify-center  gap-54pxr mobile:gap-32pxr'>
        <Link href='/'>
          <p className='line w-full leading-none font-sign-title mobile:mobile:font-sign-title-mobile  tablet:font-sign-title-tablet'>
            CAMPRO
          </p>
        </Link>
        <div className='flex w-full max-w-400pxr flex-col items-center justify-center  gap-24pxr'>
          <SignUpForm />
          <Link href='/signin'>
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
