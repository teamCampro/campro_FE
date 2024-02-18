import { IconTent } from '@/public/svgs';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from './SectionTitle';

interface CampSiteFacilitiesProps {
  facilities: string[];
}

function CampSiteFacilities({ facilities }: CampSiteFacilitiesProps) {
  return (
    <section className='flex scroll-mt-168pxr flex-col gap-16pxr'>
      <SectionTitle>시설/환경</SectionTitle>
      <div className='relative flex h-134pxr w-full max-w-1440pxr flex-col gap-16pxr mobile:h-auto mobile:gap-16pxr tablet:gap-13pxr'>
        <div className='absolute -left-10pxr bottom-0pxr flex w-full justify-normal bg-inherit shadow-none mobile:static mobile:justify-center mobile:rounded-xl mobile:bg-white mobile:shadow-categoryItem tablet:justify-normal'>
          <ul className='flex w-full flex-1 gap-16pxr p-0pxr mobile:grid mobile:max-w-288pxr mobile:grid-cols-4 mobile:gap-24pxr mobile:gap-y-20pxr mobile:px-16pxr mobile:py-24pxr'>
            <Swiper
              modules={[FreeMode]}
              freeMode={true}
              enabled={false}
              breakpoints={{
                768: { enabled: true, slidesPerView: 'auto', spaceBetween: 0 },
              }}
              id='category-swiper'
            >
              {facilities.map((facility) => (
                <SwiperSlide key={facility} id='category-slide'>
                  <li className='h-full w-auto mobile:w-48pxr'>
                    <div className='flex-center h-134pxr w-126pxr flex-col gap-24pxr rounded-xl bg-white shadow-categoryItem mobile:h-68pxr mobile:w-48pxr mobile:shadow-none tablet:w-114pxr'>
                      <IconTent className='fill-black' />
                      <div className='text-nowrap text-gray800 font-body2-semibold mobile:font-caption1-medium'>
                        {facility}
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CampSiteFacilities;
