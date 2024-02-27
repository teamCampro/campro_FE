import React, { ChangeEvent } from 'react';
import OwnerButton from './OwnerButton';
import OwnerInput from './OwnerInput/OwnerInput';
import { IconExitX } from '@/public/svgs';
import { Id } from 'react-toastify';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAddButton: () => Id | undefined;
  onClickRemoveButton: (tourPlaceName: string) => void;
  tourPlaces: string[];
}

function OwnerAddTour({
  onChange,
  onClickAddButton,
  onClickRemoveButton,
  tourPlaces,
}: Props) {
  return (
    <div className='col-span-2 w-full rounded-2xl border border-gray200 p-30pxr'>
      <div className='flex justify-between gap-45pxr'>
        <div className='flex flex-col gap-7pxr'>
          <OwnerInput
            inputName='주변 관광지'
            onChange={(e) => onChange(e)}
            placeholder='ex) 계곡 물놀이'
          />
          <OwnerButton.Navigate
            type='registration'
            customWidth='w-500pxr'
            custom='w-full h-50pxr py-8pxr px-20pxr rounded-[20px] bg-white !text-black !text-18pxr border-2 border-gray300 hover:bg-white hover:text-black hover:border-black'
            onClick={onClickAddButton}
          />
        </div>
        <div className='w-full space-y-8pxr'>
          <h2 className='text-20pxr font-semibold leading-8'>주변 관광지</h2>
          <ul className='space-y-8pxr'>
            {tourPlaces.map((tourPlace, index) => (
              <li key={index} className='flex justify-end'>
                <p className='text-20pxr leading-6 text-gray600'>{tourPlace}</p>

                <button onClick={() => onClickRemoveButton(tourPlace)}>
                  <IconExitX />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OwnerAddTour;
