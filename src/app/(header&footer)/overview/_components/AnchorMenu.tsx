'use client';
import Button from '@/components/Button';

const anchorMenus = [
  { id: '1', text: '기본 정보' },
  { id: '2', text: '시설/환경' },
  { id: '3', text: '배치도' },
  { id: '4', text: '예약안내' },
  { id: '5', text: '이용안내' },
  { id: '6', text: '후기' },
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
  const FOOTER_ID = 'footer';
  const TARGET_SECTION_ID = '4';
  const hideButton = [FOOTER_ID, TARGET_SECTION_ID].includes(selectedMenu);
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      className={`${isSticky ? 'block ' : 'hidden'} ${hideButton ? 'mobile:hidden' : 'mobile:flex mobile:h-88pxr'} sticky top-94pxr z-[25] flex h-64pxr w-full max-w-1360pxr items-center justify-between border-b border-t border-gray200 bg-white mobile:fixed mobile:bottom-0pxr mobile:top-auto mobile:justify-center mobile:border-none mobile:px-20pxr mobile:shadow-overViewButton`}
    >
      <ul className='flex mobile:hidden'>
        {anchorMenus.map(({ id, text }, i) => {
          const isMenuSelected = selectedMenu === id;
          const isLastMenuAndFooterSelected =
            i === anchorMenus.length - 1 && selectedMenu === FOOTER_ID;
          return (
            <li key={id}>
              <button
                className={`${isMenuSelected || isLastMenuAndFooterSelected ? 'text-primary100' : 'text-gray500'} px-16pxr py-23pxr text-gray500 font-body2-medium`}
                onClick={() => scrollToSection(id)}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ul>

      <Button.Round
        size='sm'
        custom={`p-16pxr font-caption1-semibold tablet:p-20pxr !w-170pxr !h-40pxr tablet:h-40pxr mobile:!w-280pxr mobile:!h-56pxr ${hideButton ? 'mobile:hidden' : 'mobile:flex'}`}
        onClick={() => scrollToSection('site')}
      >
        사이트 선택
      </Button.Round>
    </div>
  );
}

export default AnchorMenu;
