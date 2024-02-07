import { CampImageData } from '..';
import ModalAboutHeader from './ModalAboutHeader';
import Image from 'next/image';

function ModalForMobileCampImg({
  onClose,
  campImages,
}: {
  onClose: () => void;
  campImages: CampImageData[] | null;
}) {
  return (
    campImages && (
      <div className='fixed left-0pxr top-0pxr z-[1000] flex h-screen  w-full  flex-col overflow-auto bg-white p-16pxr'>
        <ModalAboutHeader onClose={onClose} />
        <div className='grid w-full grid-cols-2 gap-12pxr'>
          {campImages.map(
            (item, i) =>
              item.imgUrl && (
                <div key={item.id} className='flex w-full'>
                  <Image
                    width={138}
                    height={138}
                    className='flex w-full object-cover'
                    src={item.imgUrl}
                    alt={`${campImages[i].id}`}
                  />
                </div>
              ),
          )}
        </div>
      </div>
    )
  );
}

export default ModalForMobileCampImg;
