import { useRef, useEffect } from 'react';

interface Props {
  items: string[];
  onSelect: (item: string) => void;
  activeItem: string | null;
  onClose: () => void;
  isMobile: boolean;
}

function Dropdown({ items, onSelect, activeItem, onClose, isMobile }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !isMobile
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, isMobile]);

  const handleSelect = (e: React.MouseEvent<HTMLElement>, item: string) => {
    onSelect(item);
    e.stopPropagation();
  };

  return (
    <div
      ref={dropdownRef}
      className='scrollbar-hide  mobile:top-opxr absolute top-65pxr z-[100] flex h-222pxr w-350pxr  flex-col  items-start gap-12pxr overflow-auto rounded-[20px] bg-white-100 px-40pxr py-32pxr shadow-searchBar mobile:relative mobile:top-0pxr mobile:z-[99] mobile:h-207pxr mobile:w-full mobile:rounded-[0] mobile:px-20pxr mobile:pb-0pxr mobile:pt-16pxr'
    >
      {items.map((item, index) => (
        <div
          onClick={(e) => handleSelect(e, item)}
          key={index}
          className={`mobile:active:bg-Primary50 mobile:hover:bg-Primary50  relative flex  w-full  bg-white-100 text-black font-title3-semibold tablet:active:bg-white-100 ${item === activeItem ? 'mobile:bg-primary50' : ''} mobile:relative mobile:z-[99] mobile:justify-center tablet:justify-start`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
