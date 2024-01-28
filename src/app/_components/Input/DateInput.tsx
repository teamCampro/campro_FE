import { IconCalendar } from '@/public/svgs';
import CommonInput from './CommonInput';

function DateInput() {
  return (
    <div className='relative flex w-full flex-134 gap-4pxr'>
      <IconCalendar className='absolute left-16pxr top-16pxr ' />
      <CommonInput
        name='date'
        placeholder='날짜를 선택해주세요'
        className=' w-full rounded-[8px] bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
      />
    </div>
  );
}

export default DateInput;
