import React, { MutableRefObject } from 'react';
import { CampingCategoryType, GroundType } from '../_hooks/useTogglePopover';

interface Props {
  campingTypeRef: MutableRefObject<HTMLUListElement | null>;
  onClick: (campingType: CampingCategoryType) => void;
}

function OwnerCampingCategoryPopover({ campingTypeRef, onClick }: Props) {
  const CAMPING_CATEGORY: CampingCategoryType[] = [
    '글램핑',
    '애견캠핑',
    '오토캠핑',
    '차박',
    '카라반',
    '캠프닉',
    '키즈 캠핑',
    '텐트',
  ];

  return (
    <ul
      ref={campingTypeRef}
      className='flex-center absolute top-80pxr z-50 flex w-500pxr flex-wrap gap-10pxr rounded-2xl border-2 bg-white px-4pxr shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
    >
      {CAMPING_CATEGORY.map((category, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => onClick(category)}
              className='w-90pxr p-14pxr text-16pxr hover:bg-gray200'
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default OwnerCampingCategoryPopover;
