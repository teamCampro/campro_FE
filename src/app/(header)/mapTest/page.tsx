import Selectable from '@/components/Dropdown/Selectable';

function page() {
  return (
    <div className='flex h-screen w-full gap-8pxr bg-gray-500'>
      <Selectable types='stay'>숙박 유형</Selectable>
      <Selectable types='home'>시설</Selectable>
      <Selectable>가격</Selectable>
      <Selectable types='theme'>테마</Selectable>
      <Selectable types='trip'>여행 타입</Selectable>
    </div>
  );
}

export default page;
