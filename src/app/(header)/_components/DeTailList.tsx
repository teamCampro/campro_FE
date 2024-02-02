import { IconArrowDown, IconArrowUp } from '@/public/svgs';
import { ReactNode, useState } from 'react';

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

function DeTailList({ children }: Props) {
  const textLength = children?.toString().length;
  const [isDrop, setIsDrop] = useState(false);

  const handleClick = () => {
    setIsDrop((prev) => !prev);
  };
  return (
    <div
      className={`h-48pxr ${textLength && LENTH[textLength]} relative w-121pxr rounded-full border bg-white font-medium`}
    >
      <div
        className='flex cursor-pointer items-center gap-3pxr py-12pxr pl-20pxr pr-14pxr'
        onClick={handleClick}
      >
        <h3 className='whitespace-nowrap text-gray600 font-body2'>
          {children}
        </h3>
        <IconArrowUp fill='#949494' />
        {isDrop ? (
          <IconArrowUp fill='#949494' />
        ) : (
          <IconArrowDown fill='#949494' />
        )}
      </div>
    </div>
  );
}

export default DeTailList;
