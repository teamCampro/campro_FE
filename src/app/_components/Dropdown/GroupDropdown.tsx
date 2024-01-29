import { IconMinus, IconPlus } from '@/public/svgs';

interface Props {
  group: string;
  onChangeGroup: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function GroupDropdown({ group, onChangeGroup }: Props) {
  const groupObject = JSON.parse(group);

  const handleIncrease = (name: string) => {
    onChangeGroup({ ...groupObject, [name]: groupObject[name] + 1 });
  };

  const handleDecrease = (name: string) => {
    if (groupObject[name] > 0) {
      onChangeGroup({ ...groupObject, [name]: groupObject[name] - 1 });
    }
  };

  return (
    <div className='absolute right-0pxr top-71pxr z-[100] flex w-407pxr flex-col items-start gap-24pxr rounded-[20px] bg-white px-40pxr py-32pxr shadow-searchBar mobile:relative mobile:top-0pxr mobile:flex mobile:w-full  mobile:rounded-[0]'>
      <div className='flex w-full flex-col items-start gap-16pxr'>
        <div className='flex w-full items-center justify-between'>
          <div className=' flex-222 flex w-full  flex-col items-start'>
            <p className='flex w-full text-black font-title3-semibold'>성인</p>
            <p className='flex w-full text-gray-500 font-caption1'>18세 이상</p>
          </div>
          <div className='flex-105 flex w-full items-center'>
            <div className='flex w-full items-center justify-end gap-16pxr'>
              <IconMinus onClick={() => handleDecrease('adult')} />
              <p className='flex-center flex w-25pxr font-title3-semibold'>
                {groupObject.adult}
              </p>
              <IconPlus onClick={() => handleIncrease('adult')} />
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
              <IconMinus onClick={() => handleDecrease('child')} />
              <p className='flex-center flex w-25pxr font-title3-semibold'>
                {groupObject.child}
              </p>
              <IconPlus onClick={() => handleIncrease('child')} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full  items-center justify-between'>
        <div className='flex w-full  text-black font-title3-semibold'>
          애완동물
        </div>
        <div className='flex w-full  items-center justify-end gap-16pxr'>
          <IconMinus onClick={() => handleDecrease('pet')} />
          <p className='flex-center flex w-25pxr font-title3-semibold'>
            {groupObject.pet}
          </p>
          <IconPlus onClick={() => handleIncrease('pet')} />
        </div>
      </div>
    </div>
  );
}

export default GroupDropdown;
