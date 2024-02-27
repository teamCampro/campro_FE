'use client';

import React, { useEffect } from 'react';
import OwnerTitle from '../_components/OwnerTitle';
import OwnerButton from '../_components/OwnerButton';
import OWNER_LINK_BUTTONS from '../_constants/ownerLinkButtons';
import { OwnerInfoType } from './site-registration/page';
import { getOwnerInfo } from '../../_data/owner/getOwnerInfo';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../(header)/search/loading';
import { useRouter } from 'next/navigation';

function LandingPage() {
  const router = useRouter();
  const { data: ownerInfo } = useQuery<OwnerInfoType>({
    queryKey: ['ownerInfo'],
    queryFn: () => getOwnerInfo(Number(localStorage.getItem('userId'))),
  });

  useEffect(() => {
    if (!ownerInfo) return;
    if (ownerInfo.ownerCampingZoneList.length === 0) {
      const landToRegistration = setTimeout(() => {
        router.push('/owner/registration/first-step');
      }, 3000);

      return () => clearTimeout(landToRegistration);
    }
  }, [ownerInfo, router]);

  if (!ownerInfo) return <Loading />;
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      {ownerInfo?.ownerCampingZoneList?.length === 0 ? (
        <div className='relative h-screen w-screen'>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <span className='text-20pxr font-semibold'>
              등록된 캠핑장이 없습니다!
            </span>{' '}
            <span className='text-20pxr font-semibold text-primary100'>
              3초 뒤
            </span>
            <span className='text-20pxr font-semibold'>
              캠핑장 등록으로 이동합니다.
            </span>
          </div>
        </div>
      ) : (
        <>
          <OwnerTitle>
            안녕하세요 사장님 객실을 등록하시거나 수정 해주세요 !
          </OwnerTitle>
          <div className='grid grid-cols-2 justify-center gap-30pxr'>
            {OWNER_LINK_BUTTONS.map((button, index) => (
              <OwnerButton.Link
                key={index}
                icon={button.icon}
                href={button.href}
              >
                {button.name}
              </OwnerButton.Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LandingPage;
