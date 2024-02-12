import { IconCalendar } from '@/public/svgs';
import { forwardRef } from 'react';

interface DateInputProps {
  value: string;
  onClick: () => void;
}
const DateInputView = forwardRef<HTMLInputElement, DateInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <div onClick={onClick} className='relative flex w-full flex-134 gap-4pxr'>
        <IconCalendar className='absolute left-16pxr top-16pxr ' />
        <input
          ref={ref}
          name='date'
          placeholder='날짜를 입력해주세요'
          className=' w-full cursor-pointer whitespace-nowrap rounded-[8px] bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2-medium'
          readOnly
          value={value}
        />
      </div>
    );
  },
);
DateInputView.displayName = 'DateInputView';

export default DateInputView;
