import ExitIcon from '@/public/svgs/exit.svg';

function ModalAboutHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className=' relative mb-16pxr flex w-full items-center justify-center px-20pxr mobile:px-0pxr'>
      <div className=' absolute left-24pxr  flex items-center justify-center mobile:left-0pxr'>
        <ExitIcon onClick={onClose} />
      </div>
      <p className='flex-center w-full text-black font-title1-bold'>
        전체 사진
      </p>
    </div>
  );
}

export default ModalAboutHeader;
