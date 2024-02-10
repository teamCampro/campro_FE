import { IconArrowRightNon } from '@/public/svgs';

interface SideListType {
  id: number;
  name: string;
  isDone: boolean;
}

const SIDE_LISTS: SideListType[] = [
  { id: 1, name: '예약내역', isDone: false },
  { id: 2, name: '계정관리', isDone: false },
  { id: 3, name: '사장님 전환', isDone: false },
  { id: 4, name: '설정', isDone: false },
  { id: 5, name: '로그아웃', isDone: false },
];

function SideLists() {
  return (
    <ul className='flex flex-col py-40pxr pl-40pxr pr-24pxr'>
      {SIDE_LISTS.map((list) => {
        return (
          <li key={list.id} className='flex justify-between px-24pxr py-16pxr'>
            <h3 className='text-gray500 font-body1-bold'>{list.name}</h3>
            <IconArrowRightNon fill='#949494' className='text-gray500' />
          </li>
        );
      })}
    </ul>
  );
}

export default SideLists;
