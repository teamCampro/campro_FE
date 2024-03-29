'use client';

import Button from '@/components/Button';
import Copy from '@/components/Copy';
import { ModalOutside, ModalPortal } from '@/components/index';
import {
  IconArrowLeftNon,
  IconArrowRightNon,
  IconCopy,
  IconExit,
  IconFullPage,
} from '@/public/svgs';
import { useState } from 'react';
import MinikakaoMap from './MinikakaoMap';

interface MiniMapContainerProps {
  tour: string;
  address: string;
  name: string;
}

function MiniMapContainer({ address, name, tour }: MiniMapContainerProps) {
  const [isClose, setIsClose] = useState(false);
  const handleClick = () => {
    setIsClose(!isClose);
  };

  const handleClose = () => {
    setIsClose(false);
  };

  const tourList = tour.split(',');
  return (
    <>
      <button
        className='flex-center !leading-none text-second100 tabletMiddleMin:hidden'
        onClick={handleClick}
      >
        지도<span className='hidden tabletMin:inline-block'>보기</span>
        <span className='h-20pxr w-20pxr'>
          <IconArrowRightNon
            width='100%'
            height='100%'
            viewBox='0 0 24 24'
            fill='#7D6F5A'
          />
        </span>
      </button>
      <div className='hidden w-340pxr flex-col rounded-xl border border-gray200 tabletMiddleMin:flex'>
        <Button.Circle
          size='sm'
          custom='bg-white !w-56pxr !h-48pxr absolute top-75pxr border border-gray300 flex-center py-12pxr px-16pxr z-10 right-12pxr hover:!bg-white'
          onClick={handleClick}
        >
          <IconFullPage fill='#949494' />
        </Button.Circle>
        <MinikakaoMap location={address} size='sm' />
        <div className='flex-center h-63pxr justify-between px-20pxr py-18pxr'>
          <h3 className='text-gray600 font-body2-medium'>{address}</h3>
          <Copy copyTarget={address}>
            <div className='flex-center gap-2pxr text-nowrap text-second100 font-body2-medium'>
              <div className='h-16pxr w-16pxr'>
                <IconCopy
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                  fill='#7D6F5A'
                />
              </div>
              주소복사
            </div>
          </Copy>
        </div>
      </div>
      <div className='flex flex-col gap-12pxr px-20pxr mobile:hidden tablet1079:hidden'>
        <h5 className='font-body1-bold'>주변 관광지</h5>
        <ul className='flex w-full flex-col gap-12pxr'>
          {tourList.map((tour) => (
            <li
              key={tour}
              className='flex justify-between text-gray600 font-body2-medium'
            >
              · {tour}
              <span className='text-gray500 font-body2-medium'>2km</span>
            </li>
          ))}
        </ul>
      </div>
      {isClose && (
        <ModalPortal>
          <ModalOutside
            onClose={handleClick}
            custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full items-center justify-center overflow-hidden bg-black-50 tabletMin:px-40pxr mobile:justify-center mobile:items-center'
          >
            <div className='h-screen w-full bg-white tabletMin:rounded-2xl tabletMiddleMin:h-672pxr tabletMiddleMin:max-w-767pxr tablet1079:h-610pxr tablet1079:max-w-688pxr'>
              <div className='flex-center relative py-16pxr font-title3-semibold tabletMin:font-title1-bold'>
                <div className='absolute left-20pxr top-1/2 h-26pxr w-26pxr -translate-y-1/2'>
                  <button
                    type='button'
                    onClick={handleClose}
                    className='top-0 absolute hidden tabletMin:inline-block'
                  >
                    <IconExit
                      width='100%'
                      height='100%'
                      viewBox='0 0 24 24'
                      fill='#949494'
                    />
                  </button>
                  <button
                    type='button'
                    onClick={handleClose}
                    className='top-0 absolute inline-block tabletMin:hidden '
                  >
                    <IconArrowLeftNon
                      width='100%'
                      height='100%'
                      viewBox='0 0 24 24'
                      fill='#949494'
                    />
                  </button>
                </div>
                <h3>{name}</h3>
              </div>
              <MinikakaoMap location={address} size='modal' isClose={isClose} />
            </div>
          </ModalOutside>
        </ModalPortal>
      )}
    </>
  );
}

export default MiniMapContainer;
