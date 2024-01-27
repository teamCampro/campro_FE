import { IconLocation } from '@/public/svgs';
import CommonInput from './CommonInput';

function LocationInput() {
  return (
    <div className='relative flex w-full flex-110 gap-4pxr'>
      <IconLocation className='absolute left-16pxr top-16pxr ' />
      <CommonInput
        name='location'
        placeholder='어디로 갈까요?'
        className=' w-full rounded-lg bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
      />
    </div>
  );
}

export default LocationInput;
