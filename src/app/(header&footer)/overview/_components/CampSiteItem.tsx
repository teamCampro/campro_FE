import Button from '@/components/Button';
import {
  IconArrowRightNon,
  IconCar,
  IconPet,
  IconTent,
  IconTime,
  IconTwoPeople,
} from '@/public/svgs';
import Image from 'next/image';
import { Site } from '../[id]/page';

interface CampSiteItemProps {
  site: Site;
  openSiteModal: (site: Site) => void;
  handleReserve: (siteId: number) => void;
}

function CampSiteItem({
  site,
  openSiteModal,
  handleReserve,
}: CampSiteItemProps) {
  const { type, baseGuests, parkingLocation, allowPet, minStay } = site;
  const infos = [
    {
      text: type,
      icon: (
        <IconTent
          className='fill-gray500'
          width={16}
          height={16}
          viewBox='0 0 24 24'
        />
      ),
    },
    { text: `${baseGuests.slice(0, -1)}룸`, icon: <IconTwoPeople /> },
    { text: parkingLocation.split(' ').join(''), icon: <IconCar /> },
    { text: allowPet ? '애완 동반' : '', icon: <IconPet /> },
    { text: `최소 ${minStay}`, icon: <IconTime /> },
  ];
  return (
    <li>
      <article className='flex gap-20pxr rounded-2xl bg-gray100 p-24pxr mobile:flex-col mobile:gap-0pxr mobile:p-0pxr mobile359:rounded-none'>
        <div className='max-h-164pxr w-full max-w-164pxr mobile:h-full mobile:max-h-none mobile:max-w-none'>
          <Image
            width={164}
            height={164}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className='aspect-square rounded-2xl mobile:aspect-340/220 mobile:rounded-b-none mobile359:rounded-none'
            src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D'
            alt='dd'
          />
        </div>
        <div className='camp-site flex w-full flex-col gap-20pxr mobile:gap-16pxr mobile:p-16pxr mobile:pb-24pxr'>
          <div className='flex h-auto w-full flex-col gap-16pxr rounded-xl bg-white p-16pxr mobile:contents mobile:bg-gray100 mobile:p-0pxr'>
            <div className='mobile:camp-site-info flex flex-col border-gray300 mobile:border-b mobile:pb-16pxr'>
              <div className='flex items-center justify-between '>
                <h6 className='font-title3-bold'>{site.name}</h6>
                <span className='text-nowrap text-black font-body1-bold mobile:font-title3-semibold'>
                  {site.price.toLocaleString('ko-KR', {
                    maximumFractionDigits: 4,
                  })}
                  원
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray500 font-caption2-medium'>
                  입실 {site.checkInTime} - 퇴실 {site.checkOutTime}
                </span>
                <span className='text-gray500 font-caption2-medium'>
                  {site.minStay} 기준
                </span>
              </div>
            </div>
            <div className='ml-auto mobile:m-0pxr'>
              <Button.Round
                size='sm'
                custom={`w-98pxr !h-36pxr font-caption1-semibold text-white px-24pxr py-8xr mobile:w-full camp-site-button`}
                onClick={() => handleReserve(site.siteId)}
              >
                선택하기
              </Button.Round>
            </div>
          </div>
          <div className='camp-site-facilities flex h-auto items-center justify-between mobile:items-start mobile:pb-4pxr'>
            <ul className='flex flex-wrap gap-12pxr mobile:grid mobile:grid-cols-2 mobile:gap-20pxr mobile:gap-y-4pxr'>
              {infos.map(
                (info) =>
                  info.text && (
                    <li
                      key={info.text}
                      className='flex-center gap-2pxr !leading-none text-gray500 font-caption2-semibold mobile:justify-start'
                    >
                      <span className='inline-block h-16pxr w-16pxr'>
                        {info.icon}
                      </span>
                      {info.text}
                    </li>
                  ),
              )}
            </ul>
            <button
              type='button'
              className='flex h-full cursor-pointer items-start gap-2pxr text-nowrap text-second100 font-caption1-semibold'
              onClick={() => openSiteModal(site)}
            >
              상세정보
              <span className='inline-block h-20pxr w-20pxr'>
                <IconArrowRightNon
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                />
              </span>
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default CampSiteItem;
