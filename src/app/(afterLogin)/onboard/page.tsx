import Button from '@/components/Button';
import Link from 'next/link';

function page() {
  return (
    <div className='max-w-1920pxr flex-1 justify-center bg-onboard bg-cover bg-center bg-no-repeat pt-65pxr mobile:flex tablet:pt-201pxr'>
      <div className='flex flex-col items-center gap-108pxr'>
        <div className='flex-center flex-col gap-12pxr'>
          <h2 className='text-gray50 font-title1-semibold tablet:font-h1'>
            나는 어떤 캠핑이 맞을까?
          </h2>
          <h4 className='text-gray200 font-body2 tablet:font-title1'>
            캠퍼 테스트로 나에게 맞는 캠핑장을 알 수 있어요
          </h4>
        </div>
        <Link href={'/onboard/question'} passHref>
          <Button type='circle'>테스트 시작하기</Button>
        </Link>
      </div>
    </div>
  );
}

export default page;
