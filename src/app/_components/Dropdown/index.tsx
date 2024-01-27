interface Props {
  items: string[];
}

function Dropdown({ items }: Props) {
  return (
    <div className='scrollbar-hide absolute z-10 flex h-222pxr w-350pxr flex-col items-start  gap-12pxr overflow-auto rounded-[20px] bg-white px-40pxr py-32pxr shadow-searchBar'>
      {items.map((item) => (
        <div key={item} className='flex w-full text-black font-title3-semibold'>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
