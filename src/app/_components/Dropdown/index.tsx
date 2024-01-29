interface Props {
  items: string[];
  onSelect: (item: string) => void;
  activeItem: string | null;
}

function Dropdown({
  items,
  onSelect,

  activeItem,
}: Props) {
  return (
    <div className='scrollbar-hide  bg-white-100 mobile:top-opxr absolute top-65pxr z-[100] flex h-222pxr  w-350pxr  flex-col items-start gap-12pxr overflow-auto rounded-[20px] px-40pxr py-32pxr shadow-searchBar mobile:relative mobile:top-0pxr mobile:z-[99] mobile:h-207pxr mobile:w-full mobile:rounded-[0] mobile:px-20pxr mobile:pb-0pxr mobile:pt-16pxr'>
      {items.map((item, index) => (
        <div
          onClick={() => onSelect(item)}
          key={index}
          className={`bg-white-100 mobile:active:bg-Primary50  mobile:hover:bg-Primary50 tablet:active:bg-white-100  relative  flex w-full text-black font-title3-semibold ${item === activeItem ? 'mobile:bg-primary50' : ''} mobile:relative mobile:z-[99] mobile:justify-center tablet:justify-start`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
