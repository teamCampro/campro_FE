import Image from 'next/image';
import ModalAboutHeader from './ModalAboutHeader';

function ModalForMobileCampImg({
  onClose,
  imgUrls,
  title,
}: {
  onClose: () => void;
  imgUrls: string[];
  title: string;
}) {
  return (
    imgUrls && (
      <div
        className={`fixed left-0pxr top-0pxr z-[1000] flex h-screen  w-full  flex-col overflow-auto bg-white  ${title !== '전체 사진' ? 'pt-16pxr' : 'p-16pxr'}`}
      >
        <ModalAboutHeader onClose={onClose} title={title} />
        {title === '전체 사진' ? (
          <div className='grid w-full grid-cols-2 gap-12pxr'>
            {imgUrls.map(
              (imgUrl, i) =>
                imgUrl && (
                  <a href={imgUrl} key={imgUrl + i} target='_blank'>
                    <Image
                      width={138}
                      height={138}
                      priority
                      className='flex min-h-138pxr w-full min-w-138pxr cursor-pointer object-cover object-center hover:brightness-[0.7]'
                      src={imgUrl}
                      alt={`${imgUrl}`}
                    />
                  </a>
                ),
            )}
          </div>
        ) : (
          <div className=' flex-center relative flex  h-screen w-full bg-gray100'>
            <a href={imgUrls[0]} type='_blank'>
              <Image
                width={767}
                height={480}
                className='object-contain'
                src={imgUrls[0]}
                alt='배치도 이미지'
              />
            </a>
          </div>
        )}
      </div>
    )
  );
}

export default ModalForMobileCampImg;
