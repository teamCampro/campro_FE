import Link from 'next/link';
import { ReactNode } from 'react';
import { setSelect, setResetAll } from '../_utils/styleSetting';
import { useAppDispatch } from '@/hooks/redux';
interface CategoryItemProps {
  href: string;
  text: string;
  icon: ReactNode;
  id: number;
}

function CategoryItem({ href, text, icon, id }: CategoryItemProps) {
  const dispatch = useAppDispatch();
  const list = { id, type: text };
  return (
    <li className='h-full w-auto mobile:w-48pxr'>
      <Link
        onClick={() => {
          dispatch(setResetAll());
          dispatch(setSelect({ types: 'stay', list }));
        }}
        href={href}
        className='flex-center h-134pxr w-126pxr flex-col gap-24pxr rounded-xl bg-white shadow-categoryItem mobile:h-68pxr mobile:w-48pxr mobile:shadow-none tablet:w-114pxr'
      >
        {icon}
        <div className='text-gray800 font-body2-semibold mobile:font-caption1-medium'>
          {text}
        </div>
      </Link>
    </li>
  );
}

export default CategoryItem;
