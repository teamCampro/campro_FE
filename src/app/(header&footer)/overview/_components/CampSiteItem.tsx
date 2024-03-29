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
import { CampingZoneSite } from '../[id]/page';

interface CampSiteItemProps {
  site: CampingZoneSite;
  openSiteModal: (site: CampingZoneSite) => void;
  handleReserve: (siteId: number) => void;
}

function CampSiteItem({
  site,
  openSiteModal,
  handleReserve,
}: CampSiteItemProps) {
  const {
    campingType,
    maxPeople,
    parkingGuide,
    petYn,
    minNights,
    siteImgUrls: imgUrls,
    siteName,
  } = site;
  const infos = [
    {
      text: campingType,
      icon: (
        <IconTent
          className='fill-gray500'
          width={16}
          height={16}
          viewBox='0 0 24 24'
        />
      ),
    },
    { text: `성인 ${maxPeople}룸`, icon: <IconTwoPeople /> },
    { text: parkingGuide, icon: <IconCar /> },
    {
      text: petYn ? '애완 동반' : '',
      icon: <IconPet className='fill-gray500' />,
    },
    { text: `최소 ${minNights}박`, icon: <IconTime /> },
  ];
  const siteImgUrls = JSON.parse(imgUrls);
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
            src={siteImgUrls[0]}
            alt={siteName}
          />
        </div>
        <div className='camp-site flex w-full flex-col gap-12pxr mobile:gap-16pxr mobile:p-16pxr mobile:pb-24pxr'>
          <div className='flex h-auto w-full flex-col gap-16pxr rounded-xl bg-white p-16pxr mobile:contents mobile:bg-gray100 mobile:p-0pxr'>
            <div className='mobile:camp-site-info flex flex-col border-gray300 mobile:border-b mobile:pb-16pxr'>
              <div className='flex items-center justify-between '>
                <h6 className='font-title3-bold'>{siteName}</h6>
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
                  {site.minNights}박 기준
                </span>
              </div>
            </div>
            <div className='ml-auto mobile:m-0pxr'>
              <Button.Round
                size='sm'
                custom={`w-98pxr !h-36pxr font-caption1-semibold text-white px-24pxr py-8xr mobile:w-full camp-site-button`}
                onClick={() => handleReserve(site.id)}
              >
                선택하기
              </Button.Round>
            </div>
          </div>
          <div className='camp-site-facilities flex h-auto items-center justify-between gap-12pxr mobile:items-start mobile:pb-4pxr'>
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
              className='flex h-full cursor-pointer items-center gap-2pxr text-nowrap text-second100 font-caption1-semibold mobile:h-20pxr'
              onClick={() => openSiteModal(site)}
            >
              상세정보
              <span className='inline-block h-20pxr w-20pxr'>
                <IconArrowRightNon
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                  className='fill-second100'
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
