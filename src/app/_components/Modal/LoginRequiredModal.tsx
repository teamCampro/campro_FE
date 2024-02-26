'use client';

import { ModalPortal, ModalOutside } from '..';

function LoginRequiredModal({
  onMove,
  onClose,
}: {
  onMove: () => void;
  onClose: () => void;
}) {
  return (
    <ModalPortal>
      <ModalOutside
        onClose={onClose}
        custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full flex-center overflow-hidden bg-black-50 mobile:items-center'
      >
        <div className=' fixed z-[1000] flex  w-300pxr flex-col gap-16pxr rounded-xl border-gray200 bg-white pt-32pxr'>
          <div className='flex flex-col  justify-center gap-8pxr'>
            <h4 className='text-center text-gray800 font-body1-bold'>
              로그인을 해 주세요
            </h4>
            <span className=' text-center text-gray600 font-caption1-medium'>
              캠프로 활동은 회원만 가능합니다.
              <br />
              로그인 후 캠핑장 예약을 완료하세요.
            </span>
          </div>
          <div className='flex  w-full justify-center  gap-10pxr px-20pxr pb-20pxr pt-10pxr'>
            <button
              onClick={onClose}
              className='flex-center flex w-full cursor-pointer rounded-lg border border-gray200 px-20pxr py-14pxr'
            >
              취소
            </button>
            <button
              onClick={onMove}
              className='flex-center flex w-full cursor-pointer rounded-lg bg-primary100 px-20pxr py-14pxr text-white'
            >
              로그인 하기
            </button>
          </div>
        </div>
      </ModalOutside>
    </ModalPortal>
  );
}

export default LoginRequiredModal;
