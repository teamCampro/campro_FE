interface Props {
  items: string[];
  onSelect: (item: string) => void;
}

function Dropdown({ items, onSelect }: Props) {
  return (
    <div className=' scrollbar-hide flex flex-col gap-12pxr overflow-auto  bg-white  px-20pxr pb-0pxr pt-16pxr shadow-searchBar mobile:h-207pxr mobile:w-full tablet:absolute  tablet:z-10 tablet:h-222pxr tablet:w-350pxr tablet:items-start tablet:rounded-[20px] tablet:px-40pxr tablet:py-32pxr'>
      {items.map((item, index) => (
        <div
          onClick={() => onSelect(item)}
          key={index}
          className='mobile:active:bg-Primary50 flex w-full text-black font-title3-semibold active:bg-primary50 mobile:justify-center tablet:justify-start tablet:active:bg-white'
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
