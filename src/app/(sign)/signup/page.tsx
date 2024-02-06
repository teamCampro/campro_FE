import SignUpForm from '@/components/Form/SignUpForm';

function Page() {
  return (
    <div className='relative  flex w-full flex-col items-center justify-center gap-56pxr  bg-[url("/avifs/sign.avif")] bg-cover bg-center bg-no-repeat pb-149pxr pt-102pxr mobile:gap-40pxr  mobile:px-20pxr mobile:pt-40pxr tablet:px-100pxr tablet:pb-124pxr tablet:pt-96pxr'>
      <div className=' flex w-full flex-col items-center justify-center'>
        <span className='line tablet:font-sign-title-tablet mobile:mobile:font-sign-title-mobile  w-full leading-none  font-sign-title'>
          CAMPRO
        </span>
        <p className='tablet:font-sign-subTitle1-tablet mobile:font-sign-subTitle1-mobile  flex flex-nowrap gap-12pxr whitespace-nowrap font-sign-subTitle1'>
          Camping for
          <span className='tablet:font-sign-subTitle2-tablet mobile:font-sign-subTitle2-mobile flex-center  font-sign-subTitle2'>
            Beginers
          </span>
        </p>
      </div>
      <div className='flex w-full max-w-400pxr flex-col items-center justify-center  gap-24pxr'>
        <SignUpForm />
        <p className='flex w-full items-center justify-center text-[#DFDFDF] font-body2'>
          이미 이메일이있으신가요?
        </p>
      </div>
    </div>
  );
}

export default Page;
