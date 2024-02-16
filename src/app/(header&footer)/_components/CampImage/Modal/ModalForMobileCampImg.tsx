import Image from 'next/image';
import { CampImageData } from '..';
import ModalAboutHeader from './ModalAboutHeader';

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
                <Image
                  width={138}
                  height={138}
                  key={item.id}
                  className='flex min-h-138pxr w-full min-w-138pxr cursor-pointer object-cover object-center hover:brightness-[0.7]'
                  src={item.imgUrl}
                  alt={`${campImages[i].id}`}
                />
              ),
          )}
        </div>
      </div>
    )
  );
}

export default ModalForMobileCampImg;
