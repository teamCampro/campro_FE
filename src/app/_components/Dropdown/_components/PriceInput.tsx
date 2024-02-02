import { useState } from 'react';

function PriceInput() {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => {
    setIsFocus(!isFocus);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <div className='flex-center h-54pxr w-116pxr rounded-lg bg-gray100 p-16pxr mobile:w-120pxr mobile:gap-4pxr mobile:bg-white'>
      <input
        className='w-66pxr bg-gray100 text-right font-medium text-gray800 outline-0 font-body2 mobile:w-70pxr mobile:bg-white'
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <h3
        className={`font-medium ${isFocus ? 'text-gray-700' : 'text-gray500'}  font-body2`}
      >
        원
      </h3>
    </div>
  );
}

export default PriceInput;
