'use client';

import { IconArrowDown, IconArrowUp } from '@/public/svgs';
import {
  FocusEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { Button, CheckBox } from '..';
import { DETAIL } from '../../_constants';
import SelectList from './_components/SelectList';
import PriceTable from './_components/PriceTable';

interface Props {
  children: ReactNode;
  types?: string;
}

interface LengthType {
  [key: string]: string;
  '2': string;
  '5': string;
}

const LENTH: LengthType = {
  '2': 'w-90pxr',
  '5': 'w-121pxr',
};

function Selectable({ children, types }: Props) {
  const textLength = children?.toString().length;
  const [isDrop, setIsDrop] = useState(false);

  const callbackRef = useCallback((current: HTMLDivElement) => {
    current?.focus();
  }, []);

  const handleClick = () => {
    setIsDrop((prev) => !prev);
    console.log('onClick 작동중');
  };
  const handleBlur = (e: FocusEvent) => {
    setTimeout(() => {
      console.log(e.relatedTarget);
      !e.relatedTarget && setIsDrop(false);
      console.log('onBlur 작동중');
    }, 150);
  };

  return (
    <>
      <div
        className={`h-48pxr ${textLength && LENTH[textLength]} relative w-121pxr rounded-full border bg-white font-medium mobile:flex mobile:h-full mobile:w-full mobile:flex-col mobile:rounded-none mobile:border-none`}
        /*   ref={callbackRef}
        tabIndex={-1}
        onBlur={handleBlur} */
      >
        <div
          className='flex cursor-pointer items-center gap-3pxr py-12pxr pl-20pxr pr-14pxr mobile:justify-between'
          onClick={handleClick}
        >
          <h3 className='whitespace-nowrap text-gray600 font-body2 mobile:text-black mobile:font-title3-semibold'>
            {children}
          </h3>
          {isDrop ? (
            <IconArrowUp fill='#949494' />
          ) : (
            <IconArrowDown fill='#949494' />
          )}
        </div>
        {isDrop && (
          <div className='absolute left-0pxr top-50pxr rounded-[20px] bg-white mobile:static'>
            <ul
              className={`scrollbar-hide relative  z-10 flex h-full w-320pxr flex-col justify-between gap-20pxr  px-20pxr pb-20pxr pt-24pxr  mobile:w-full mobile:overflow-y-auto mobile:bg-gray100  ${types ? 'h-249pxr mobile:h-221pxr mobile:px-40pxr' : 'h-98pxr mobile:h-78pxr mobile:px-16pxr mobile:py-12pxr'}`}
            >
              {types ? <SelectList types={types} /> : <PriceTable />}
            </ul>

            {/* <div className='flex-center h-88pxr gap-8pxr border-t border-b-white px-20pxr py-16pxr'>
              <div>초기화</div>
              <Button.Round
                size='sm'
                custom='w-174pxr h-56pxr'
                onClick={handleClick}
              >
                적용
              </Button.Round>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Selectable;
