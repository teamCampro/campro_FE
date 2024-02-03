// 'use client';

// import {
//   CommonForm,
//   Button,
//   GroupCountController,
//   DatePickerController,
//   LocationController,
//   LocationInputView,
// } from '@/src/app/_components';
// import { FieldValues } from 'react-hook-form';
// import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import useMediaQueries from '@/hooks/useMediaQueries';
// function SearchBarForMap() {
//   const searchParams = useSearchParams(); // ?id=123&minhyuk=천재

//   const router = useRouter();

//   const onSubmit = (data: FieldValues) => {
//     if (Array.isArray(data.date) && data.date.length === 2) {
//       const location = encodeURIComponent(data.location);
//       const checkIn = encodeURIComponent(
//         new Date(data.date[0].toLocaleDateString('fr-CA'))
//           .toISOString()
//           .slice(0, 10),
//       );
//       const checkOut = encodeURIComponent(
//         new Date(data.date[1].toLocaleDateString('fr-CA'))
//           .toISOString()
//           .slice(0, 10),
//       );
//       const group = encodeURIComponent(data.group);

//       const queryString = `location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&group=${group}`;

//       router.push(`/search?${queryString}`);
//     } else {
//       console.error('Invalid date range');
//     }
//   };

//   return (
//     <div className='flex-center w-full'>
//       <CommonForm
//         className='flex w-full max-w-1360pxr justify-between  gap-16pxr rounded-lg bg-white px-28pxr py-32pxr '
//         onSubmit={onSubmit}
//       >
//         <div className='flex w-full gap-12pxr'>
//           <LocationController
//             name='location'
//             default={searchParams.get('location') || ''}
//           />
//           <DatePickerController
//             name='date'
//             checkIn={searchParams.get('checkIn') || ''}
//             checkOut={searchParams.get('checkOut') || ''}
//           />
//           <GroupCountController
//             name='group'
//             groupCount={
//               JSON.parse(searchParams.get('group') || '') || {
//                 adult: 0,
//                 child: 0,
//                 pet: 0,
//               }
//             }
//           />
//         </div>
//         <Button.Round
//           type='submit'
//           size='sm'
//           custom='mobile:w-full tablet:w-full max-w-134pxr w-full'
//         >
//           검색
//         </Button.Round>
//       </CommonForm>
//     </div>
//   );
// }

// export default SearchBarForMap;
