interface Props {
  item: string[];
}

function Dropdown({ item }: Props) {
  return (
    <div className='flex w-350pxr flex-col items-start gap-12pxr rounded-[20px] bg-white px-40pxr py-32pxr shadow-searchBar absolute z-10'>
      <div className='flex w-full text-black font-title3-semibold'>{item}</div>
    </div>
  );
}

export default Dropdown;
