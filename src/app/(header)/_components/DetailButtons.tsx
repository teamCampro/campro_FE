import { IconArrowRightNon, IconFilter } from '@/public/svgs';
import { MapSizeType } from '../search/page';

function DetailButtons({
  mapSize,
  handleMapSize,
}: {
  mapSize: string;
  handleMapSize: (size: MapSizeType) => void;
}) {
  const mapButtonClass = mapSize === 'list' ? '' : 'hidden';

  return (
    <div className='custom-gradient z-10 flex flex-1 gap-16pxr mobileMin:justify-end'>
      <div className='flex h-48pxr w-96pxr cursor-pointer items-center gap-4pxr rounded-full border bg-white py-12pxr pl-20pxr pr-14pxr font-medium'>
        <h3 className='whitespace-nowrap text-center text-gray600 font-body2-semibold'>
          필터
        </h3>
        <IconFilter />
      </div>
      <div
        className={`flex h-48pxr w-102pxr cursor-pointer items-center gap-3pxr rounded-xl border bg-white py-12pxr pl-20pxr pr-14pxr font-medium mobile:fixed mobile:bottom-23pxr mobile:left-2/4 mobile:-translate-x-2/4 ${mapButtonClass}`}
        onClick={() => handleMapSize('map')}
      >
        <IconArrowRightNon />
        <h3 className='whitespace-nowrap text-gray600 font-body2-semibold'>
          지도
        </h3>
      </div>
    </div>
  );
}

export default DetailButtons;
