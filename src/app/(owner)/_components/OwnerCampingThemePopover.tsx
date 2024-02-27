import React, { MutableRefObject } from 'react';
import { CampingThemeType } from '../_hooks/useTogglePopover';

interface Props {
  campingThemeRef: MutableRefObject<HTMLUListElement | null>;
  onClick: (theme: CampingThemeType) => void;
}

function OwnerCampingThemePopover({ campingThemeRef, onClick }: Props) {
  const CAMPING_THEME: CampingThemeType[] = [
    '감성적',
    '아늑한',
    '활기찬',
    '자연적',
  ];

  return (
    <ul
      ref={campingThemeRef}
      className='flex-center absolute top-80pxr z-50 flex w-500pxr flex-wrap gap-10pxr rounded-2xl border-2 bg-white px-4pxr shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
    >
      {CAMPING_THEME.map((theme, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => onClick(theme)}
              className='w-90pxr p-14pxr text-16pxr hover:bg-gray200'
            >
              {theme}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default OwnerCampingThemePopover;
