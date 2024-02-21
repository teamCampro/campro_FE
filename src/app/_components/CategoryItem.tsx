import { useAppDispatch } from '@/hooks/redux';
import Link from 'next/link';
import { ReactNode } from 'react';
import { setResetAll, setSelect } from '../_utils/styleSetting';
interface CategoryItemProps {
  href: string;
  text: string;
  icon: ReactNode;
  id?: number;
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
        <div className='h-24pxr w-24pxr'>{icon}</div>
        <div className='text-nowrap text-gray800 font-body2-semibold mobile:font-caption1-medium'>
          {text}
        </div>
      </Link>
    </li>
  );
}

export default CategoryItem;
