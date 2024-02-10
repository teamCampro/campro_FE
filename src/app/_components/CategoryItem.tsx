import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryItemProps {
  href: string;
  text: string;
  icon: ReactNode;
}

function CategoryItem({ href, text, icon }: CategoryItemProps) {
  return (
    <li className='h-full w-auto mobile:w-48pxr'>
      <Link
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
