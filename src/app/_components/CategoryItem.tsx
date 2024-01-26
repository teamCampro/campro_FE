import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryItemProps {
  href: string;
  text: string;
  icon: ReactNode;
}

function CategoryItem({ href, text, icon }: CategoryItemProps) {
  return (
    <li className='h-full w-48pxr tablet:w-auto'>
      <Link
        href={href}
        className='flex-center h-68pxr w-48pxr flex-col gap-24pxr rounded-xl bg-white tablet:h-134pxr tablet:w-114pxr tablet:overflow-y-hidden tablet:shadow-categoryItem desktop:w-126pxr'
      >
        {icon}
        <div className='text-gray800 font-caption1 tablet:font-body2-semibold'>
          {text}
        </div>
      </Link>
    </li>
  );
}

export default CategoryItem;
