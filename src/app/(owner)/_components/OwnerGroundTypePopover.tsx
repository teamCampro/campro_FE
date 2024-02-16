import React, { MutableRefObject } from 'react';
import { GroundType } from '../_hooks/useTogglePopover';
interface Props {
  groundTypeRef: MutableRefObject<HTMLUListElement | null>;
  onClick: (ground: GroundType) => void;
}

function OwnerGroundTypePopover({ groundTypeRef, onClick }: Props) {
  const GROUND_TYPE: GroundType[] = ['파쇄석', '잔디', '흙', '데크'];

  return (
    <ul
      ref={groundTypeRef}
      className='absolute top-80pxr flex w-500pxr justify-center gap-10pxr rounded-2xl border-2 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
    >
      {GROUND_TYPE.map((ground, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => onClick(ground)}
              className='w-90pxr p-20pxr text-18pxr hover:bg-gray200'
            >
              {ground}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default OwnerGroundTypePopover;
