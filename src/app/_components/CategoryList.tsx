import { IconGlamping, IconTent } from '@/public/svgs';
import { CategoryItem } from '.';

const links = [
  {
    href: '/onboard',
    text: '텐트캠핑',
    icon: <IconTent />,
  },
  {
    href: '/',
    text: '글램핑',
    icon: <IconGlamping />,
  },
  {
    href: '/',
    text: '캠핑카',
    icon: <IconGlamping />,
  },
  {
    href: '/',
    text: '오토캠핑',
    icon: <IconGlamping />,
  },
  {
    href: '/',
    text: '차박',
    icon: <IconGlamping />,
  },
  {
    href: '/',
    text: '캠프닉',
    icon: <IconGlamping />,
  },
  {
    href: '/',
    text: '키즈캠핑',
    icon: <IconGlamping />,
  },
  {
    href: '/',
    text: '애견캠핑',
    icon: <IconGlamping />,
  },
];

function CategoryList() {
  return (
    <div className='flex-center w-full min-w-288pxr justify-center rounded-xl bg-white px-16pxr py-24pxr shadow-categoryItem tablet:contents'>
      <ul className='grid w-full max-w-288pxr grid-cols-4 gap-20pxr tablet:flex tablet:max-w-1200pxr tablet:items-center tablet:gap-12pxr tablet:overflow-x-hidden desktop:justify-center'>
        {links.map(({ href, text, icon }) => (
          <li
            key={text}
            className='h-full w-48pxr tablet:w-auto tablet:px-10pxr tablet:py-10pxr'
          >
            <CategoryItem href={href} text={text} icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
