'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import OWNER_REGISTRATION_ROUTES from '../_constants/ownerRegistrationRoutes';
import OwnerButton from './OwnerButton';
import { useMutation } from '@tanstack/react-query';
import { postCampingZoneRegistration } from '../../_data/owner/postCampingZoneRegistration';

function OwnerBottomController() {
  const pathName = usePathname();

  const baseRoute = OWNER_REGISTRATION_ROUTES.baseRoute;
  const { routes } = OWNER_REGISTRATION_ROUTES;

  const registrationRoutes = routes.map((route) => baseRoute + route);

  const prevPageIndex = registrationRoutes.indexOf(pathName) - 1;
  const nextPageIndex = registrationRoutes.indexOf(pathName) + 1;

  const prevPageRoute = registrationRoutes[prevPageIndex];
  const nextPageRoute = registrationRoutes[nextPageIndex];

  const firstPageRoute = routes[0];
  const lastPageRoute = routes[routes.length - 1];

  const registrationMutation = useMutation({
    mutationFn: () => postCampingZoneRegistration(),
  });

  const button = () => {
    switch (true) {
      case pathName.includes(firstPageRoute):
        return (
          <div className='flex h-full items-center justify-end'>
            <Link href={nextPageRoute}>
              <OwnerButton.Navigate type='next' />
            </Link>
          </div>
        );

      case pathName.includes(lastPageRoute):
        return (
          <div className='flex h-full items-center justify-between'>
            <Link href={prevPageRoute}>
              <OwnerButton.Navigate type='prev' />
            </Link>
            <Link href={'/owner'}>
              <OwnerButton.Navigate
                type='done'
                onClick={() => registrationMutation.mutate()}
              />
            </Link>
          </div>
        );

      default:
        return (
          <div className='flex h-full items-center justify-between'>
            <Link href={prevPageRoute}>
              <OwnerButton.Navigate type='prev' />
            </Link>
            <Link href={nextPageRoute}>
              <OwnerButton.Navigate type='next' />
            </Link>
          </div>
        );
    }
  };

  const progressPercent = () => {
    const fullRange = registrationRoutes.length;
    const currentIndex = registrationRoutes.indexOf(pathName) + 1;
    const percent = Math.trunc((currentIndex / fullRange) * 100);
    return percent;
  };

  return (
    <div className='fixed bottom-0pxr left-0pxr z-50 h-100pxr w-full bg-white pb-10pxr'>
      <div className='h-10pxr w-full bg-gray300'>
        <hr
          style={{ width: `${progressPercent()}%` }}
          className={`h-full bg-black`}
        />
      </div>
      <div className='h-full px-80pxr'>{button()}</div>
    </div>
  );
}

export default OwnerBottomController;
