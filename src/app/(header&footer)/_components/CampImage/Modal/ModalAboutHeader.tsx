import { IconClose } from '@/public/svgs';

function ModalAboutHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className=' relative mb-16pxr flex w-full items-center justify-center px-20pxr mobile:px-0pxr'>
      <button
        type='button'
        className='absolute left-24pxr  flex items-center justify-center mobile:left-0pxr'
        onClick={onClose}
      >
        <IconClose />
      </button>
      <p className='flex-center w-full text-black font-title1-bold'>
        전체 사진
      </p>
    </div>
  );
}

export default ModalAboutHeader;
