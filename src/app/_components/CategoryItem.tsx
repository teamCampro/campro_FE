import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryItemProps {
  href: string;
  text: string;
  icon: ReactNode;
}

function CategoryItem({ href, text, icon }: CategoryItemProps) {
  return (
    <Link
      href={href}
      className='flex-center h-68pxr w-48pxr flex-col gap-24pxr rounded-xl bg-white tablet:h-114pxr tablet:w-94pxr tablet:overflow-y-hidden tablet:shadow-categoryItem desktop:w-106pxr'
    >
      {icon}
      <div className='text-gray800 font-caption1 tablet:font-body2-semibold'>
        {text}
      </div>
    </Link>
  );
}

export default CategoryItem;
