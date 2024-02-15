'use client';

import { Button, ModalOutside, ModalPortal } from '@/components/index';

interface CancleReserverModalType {
  handleClick: () => void;
}

function CancleReserverModal({ handleClick }: CancleReserverModalType) {
  return (
    <ModalPortal>
      <ModalOutside
        onClose={handleClick}
        custom='fixed flex-center !left-0pxr mobile:items-center top-0pxr z-[1000] overflow-hidden bg-black-50'
      >
        <div className='flex-center h-199pxr w-300pxr flex-col justify-start rounded-xl bg-white pt-32pxr'>
          <h3 className='pb-8pxr text-gray800 font-body1-bold'>
            예약을 취소할까요?
          </h3>
          <p className='mb-16pxr text-center text-gray600 font-caption1-medium'>
            취소 후 재예약하면, 예약 순서가 뒤로 밀려요.
            <br /> 그래도 취소할까요?
          </p>
          <div className='flex justify-center gap-10pxr px-20pxr py-10pxr'>
            <Button.Round custom='!w-125pxr px-20pxr py-14pxr bg-white border border-gray200 font-caption1-semibold !h-48pxr flex !text-gray500 !rounded-lg hover:!bg-primary100 hover:!text-white'>
              아니오
            </Button.Round>
            <Button.Round custom='!w-125pxr px-20pxr py-14pxr bg-white border border-gray200 font-caption1-semibold !h-48pxr flex !text-gray500 !rounded-lg hover:!bg-primary100 hover:!text-white'>
              취소할래요
            </Button.Round>
          </div>
        </div>
      </ModalOutside>
    </ModalPortal>
  );
}

export default CancleReserverModal;
