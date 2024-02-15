'use client';
import Button from '@/components/Button';

const anchorMenus = [
  '기본 정보',
  '시설/환경',
  '배치도',
  '예약안내',
  '이용안내',
  '후기',
];

function AnchorMenu({
  isSticky,
  selectedMenu,
  showSiteButton,
}: {
  isSticky: boolean;
  selectedMenu: string;
  showSiteButton: boolean;
}) {
  return (
    <div
      className={`${isSticky ? 'block ' : 'hidden'} ${showSiteButton ? 'mobile:flex mobile:h-88pxr' : 'mobile:hidden'} sticky top-95pxr z-[25] flex h-64pxr w-full max-w-1360pxr items-center justify-between border-b border-t border-gray200 bg-white mobile:fixed mobile:bottom-0pxr mobile:top-auto mobile:justify-center mobile:border-none mobile:px-20pxr mobile:shadow-overViewButton`}
    >
      <ul className='flex mobile:hidden'>
        {anchorMenus.map((menu, i) => (
          <li key={menu + i}>
            <a
              className={`${+selectedMenu === i + 1 ? 'text-primary100' : 'text-gray500'} px-16pxr py-23pxr text-gray500 font-body2-medium`}
              href={`#${i + 1}`}
            >
              {menu}
            </a>
          </li>
        ))}
      </ul>
      <a href='#site'>
        <Button.Round
          size='sm'
          custom={`p-16pxr font-caption1-semibold tablet:p-20pxr !w-170pxr !h-40pxr tablet:h-40pxr mobile:!w-280pxr mobile:!h-56pxr ${showSiteButton ? 'mobile:flex' : 'mobile:hidden'}`}
        >
          사이트 선택
        </Button.Round>
      </a>
    </div>
  );
}

export default AnchorMenu;
