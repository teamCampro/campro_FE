import { IconPlusNon } from '@/public/svgs';

function WriteReview() {
  return (
    <>
      <div className='mt-24pxr flex flex-col'>
        <h3 className='mb-8pxr text-black font-body1-bold'>
          이용 사진/영상이 있으신가요?
        </h3>
        <div className='flex-center'>
          <button
            /* onClick={() => handleAdd(vehicleNumber)} */
            className='flex-center flex h-56pxr w-108pxr flex-nowrap gap-4pxr rounded-[99px] border border-primary100 py-24pxr pl-24pxr pr-32pxr font-body2-medium hover:bg-primary50'
          >
            <div className='h-20pxr w-20pxr'>
              <IconPlusNon
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='#4F9E4F'
              />
            </div>
            <p className='whitespace-nowrap text-primary100 font-body2-semibold'>
              추가
            </p>
          </button>
        </div>
        <div className='mt-24pxr flex flex-col gap-12pxr'>
          <h3 className='text-black font-body1-bold'>후기를 작성해 주세요</h3>
          <textarea
            placeholder={`리뷰 작성 시 주의해주세요\n리뷰를 보는 사용자와 사업자에게\n욕설, 비방,명예훼손성 표현은 자제해 주세요.`}
            className='h-200pxr w-full resize-none rounded-lg border-none bg-gray100 p-16pxr outline-none placeholder:font-body2-medium'
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default WriteReview;
