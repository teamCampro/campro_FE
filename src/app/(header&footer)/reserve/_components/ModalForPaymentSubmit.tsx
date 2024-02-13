'use client';

import { ModalOutside, ModalPortal, Button } from '@/components/index';

interface Props {
  onClose: () => void;
}

function ModalForPaymentSubmit({ onClose }: Props) {
  return (
    <ModalPortal>
      <ModalOutside
        onClose={onClose}
        custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full flex-center overflow-hidden bg-black-50 mobile:items-center'
      >
        <div className=' fixed z-[1000] flex  w-300pxr flex-col rounded-xl border-gray200 bg-white px-20pxr pb-20pxr pt-32pxr'>
          <p className='flex-center mb-8pxr font-body1-bold'>
            에약 신청이 완료됐어요!
          </p>
          <p className=' flex-centerfont-caption-medium mb-16pxr whitespace-nowrap'>
            3시간 안에 신청서를 확인 후 알려드릴게요
          </p>
          <p className=' flex-center font-caption-medium whitespace-nowrap  text-gray500'>
            선 예약이 있다면 신청이 취소될 수 있어요.
          </p>
          <p className=' flex-center font-caption-medium mb-26pxr  text-gray500'>
            예약내역에서 취소/상황을 알 수 있어요
          </p>
          <Button.Round
            onClick={onClose}
            size='sm'
            custom='w-260pxr h-48pxr py-14pxr px-20pxr rounded-[8px] flex-center relative z-[1000]'
          >
            확인
          </Button.Round>
        </div>
      </ModalOutside>
    </ModalPortal>
  );
}

export default ModalForPaymentSubmit;
