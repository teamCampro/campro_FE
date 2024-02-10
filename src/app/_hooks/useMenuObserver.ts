// import { useEffect, useRef } from 'react';

// export const useMenuObserver = (
//   setState: React.Dispatch<React.SetStateAction<number>>,
//   stateNumber: number,
// ): React.MutableRefObject<HTMLDivElement | null>[] => {
//   const isRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const rootMargin = '-100px';

//     const option = {
//       threshold: 0,
//       rootMargin: '0px',
//     };
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntries = entries.filter((entry) => entry.isIntersecting);
//         const sortedEntries = visibleEntries.sort(
//           (a, b) => b.intersectionRatio - a.intersectionRatio,
//         );
//         if (sortedEntries.length > 0) {
//           setState(stateNumber);
//         }
//       },
//       {
//         root: null, // 뷰포트를 감시 대상으로 사용
//         rootMargin: '0px',
//         threshold: 0.1, // 요소의 10%가 보일 때 콜백 함수 호출
//       },
//     );

//     Object.values(sectionRefs).forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return [isRef];
// };
