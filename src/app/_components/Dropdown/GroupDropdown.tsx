import { IconMinus, IconPlus } from '@/public/svgs';

interface Group {
  adult: number;
  child: number;
  pet: number;
}

function GroupDropdown({ group }: { group: Group }) {
  return (
    <div className=' absolute  right-0pxr  top-71pxr z-[100] flex w-407pxr flex-col items-start gap-24pxr rounded-[20px] bg-white px-40pxr py-32pxr shadow-searchBar'>
      <div className='flex w-full flex-col items-start gap-16pxr'>
        <div className='flex w-full items-center justify-between'>
          <div className=' flex-222 flex w-full  flex-col items-start'>
            <p className='flex w-full text-black font-title3-semibold'>성인</p>
            <p className='flex w-full text-gray-500 font-caption1'>18세 이상</p>
          </div>
          <div className='flex-105 flex w-full items-center'>
            <div className='flex w-full items-center justify-end gap-16pxr'>
              <IconMinus />
              <p className='flex-center flex w-25pxr font-title3-semibold'>
                {group.adult}
              </p>
              <IconPlus />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between'>
          <div className=' flex-222 flex w-full  flex-col items-start'>
            <p className='flex w-full text-black font-title3-semibold'>아동</p>
            <p className='flex w-full text-gray-500 font-caption1'>
              0 ~ 17세 이하
            </p>
          </div>

          <div className='flex-105 flex w-full items-center'>
            <div className='flex w-full items-center justify-end gap-16pxr'>
              <IconMinus />
              <p className='flex-center flex w-25pxr font-title3-semibold'>
                {group.child}
              </p>
              <IconPlus />
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full  items-center justify-between'>
        <div className='flex w-full  text-black font-title3-semibold'>
          애완동물
        </div>
        <div className='flex w-full  items-center justify-end gap-16pxr'>
          <IconMinus />
          <p className='flex-center flex w-25pxr font-title3-semibold'>
            {group.pet}
          </p>
          <IconPlus />
        </div>
      </div>
    </div>
  );
}

export default GroupDropdown;
