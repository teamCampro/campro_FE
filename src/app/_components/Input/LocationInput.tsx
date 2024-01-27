// 'use client';

// import { IconLocation } from '@/public/svgs';
// import CommonInput from './CommonInput';
// import { useState } from 'react';
// import Dropdown from '../Dropdown';

// const locations = [
//   '경기',
//   '강원',
//   '경남',
//   '충남',
//   '충북',
//   '경북',
//   '전남',
//   '인천',
//   '부산',
//   '전북',
//   '서울',
//   '대구',
//   '제주',
//   '제주',
//   '대전',
//   '울산',
//   '광주',
//   '세종',
// ];

// interface Props {
//   name: string;
// }

// function LocationInput({ field }) {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   return (
//     <>
//       <div className='relative flex w-full flex-110 gap-4pxr'>
//         <IconLocation className='absolute left-16pxr top-16pxr ' />
//         <input
//           name='location'
//           placeholder='어디로 갈까요?'
//           className=' w-full rounded-lg bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
//         />
//       </div>
//       {isDropdownVisible && <Dropdown item={locations} />}
//     </>
//   );
// }

// export default LocationInput;
