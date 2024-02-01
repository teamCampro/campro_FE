'use client';

import Selectable from '@/components/Dropdown/Selectable';
import { IconArrowRightNon, IconFilter } from '@/public/svgs';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '@/hooks/redux';
import ModalOutside from '@/components/Modal/ModalOutside';
import ModalPortal from '@/components/Modal/ModalPortal';
import ModalLayout from '@/components/Modal/ModalLayout';
import { useDispatch } from 'react-redux';
import { setClose, setDetailState } from '@/src/app/_utils/detailState';

function DetailPanel() {
  const details = useAppSelector((state) => state.detail);
  const checkList = useAppSelector((state) => state.styleSetting);
  const dispatch = useDispatch();

  const handleDropClick = (id: number) => {
    dispatch(setDetailState(id));
  };
  console.log(details);
  console.log(checkList);
  return (
    <ModalPortal>
      <ModalOutside onClose={() => dispatch(setClose(false))}>
        <ModalLayout>
          <div className='w-full bg-white'>
            <div className='m-auto flex max-w-1440pxr items-center justify-start gap-8pxr'>
              <h3 className='flex-center relative z-10 mr-12pxr h-48pxr basis-59pxr whitespace-nowrap bg-white font-body2-semibold'>
                상세필터
              </h3>
              <div className='flex gap-6pxr'>
                <Swiper
                  modules={[FreeMode]}
                  freeMode={true}
                  slidesPerView={'auto'}
                  centeredSlides={false}
                  spaceBetween={6}
                  initialSlide={0}
                  slideToClickedSlide
                  id='filterSlide'
                  className='!overflow-visible'
                >
                  {details.map((detail) => {
                    const textLength = detail.type.length > 2;
                    return (
                      <SwiperSlide
                        key={detail.id}
                        className={`${textLength ? '!w-121pxr' : '!w-90pxr'}`}
                      >
                        <Selectable
                          handleDropClick={handleDropClick}
                          typeInfo={detail}
                        >
                          {detail.type}
                        </Selectable>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className='custom-gradient right-0pxr z-10 flex w-250pxr grow-1 gap-16pxr mobileMin:justify-end tablet:absolute'>
                <div className='flex h-48pxr w-96pxr cursor-pointer items-center gap-4pxr rounded-full border bg-white py-12pxr pl-20pxr pr-14pxr font-medium'>
                  <h3 className='whitespace-nowrap text-gray600 font-body2-semibold'>
                    필터
                  </h3>
                  <IconFilter />
                </div>
                <div className='flex h-48pxr w-102pxr cursor-pointer items-center gap-3pxr rounded-xl border bg-white py-12pxr pl-20pxr pr-14pxr font-medium'>
                  <IconArrowRightNon />
                  <h3 className='whitespace-nowrap text-gray600 font-body2-semibold'>
                    지도
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </ModalLayout>
      </ModalOutside>
    </ModalPortal>
  );
}

export default DetailPanel;
