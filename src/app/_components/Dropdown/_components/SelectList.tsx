import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { DETAIL } from '@/src/app/_constants';
import { setDelete, setSelect } from '@/src/app/_utils/styleSetting';
import { useCallback, useState } from 'react';
interface SelectListType {
  types?: string;
}

interface SelectListsType {
  id: number;
  type: string;
}

function SelectList({ types }: SelectListType) {
  const checkList = useAppSelector((state) => state.styleSetting);
  const dispatch = useAppDispatch();
  const [checkedList, setCheckedLists] = useState<SelectListsType[]>([]);

  //개별 체크 클릭시 발생
  const handleCheck = useCallback(
    (checked: boolean, list: SelectListsType, types: string) => {
      if (checked) {
        /* setCheckedLists((prevCheckedList) => [...prevCheckedList, list]); */
        dispatch(setSelect({ list, types }));
      } else {
        /* setCheckedLists((prevCheckedList) =>
          prevCheckedList.filter((el) => el.id !== list.id),
        ); */
        dispatch(setDelete({ list, types }));
      }
    },
    [checkList],
  );

  return (
    <>
      {types &&
        DETAIL[types].map((list) => {
          return (
            <li key={list.id} className='flex-center justify-between'>
              <h3>{list.type}</h3>
              <input
                type='checkbox'
                checked={checkList.select[types].includes(list) ? true : false}
                onChange={(e) => {
                  handleCheck(e.target.checked, list, types);
                }}
              />
            </li>
          );
        })}
    </>
  );
}

export default SelectList;
