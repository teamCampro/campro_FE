import { IconPeople } from '@/public/svgs';
import CommonInput from './CommonInput';

function GroupCountInput() {
  return (
    <div className='relative flex w-full flex-123 gap-4pxr'>
      <IconPeople className='absolute left-16pxr top-16pxr ' />
      <CommonInput
        name='groupCount'
        placeholder='참여 그룹을 설정해주세요'
        className=' w-full cursor-pointer rounded-[8px] bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
        readOnly
      />
    </div>
  );
}

export default GroupCountInput;
