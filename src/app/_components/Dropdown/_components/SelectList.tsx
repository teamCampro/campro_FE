import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IconCheckboxOff, IconCheckboxOn } from '@/public/svgs';
import { DETAIL } from '@/src/app/_constants';
import { setDelete, setSelect } from '@/src/app/_utils/styleSetting';
import { useCallback, useEffect, useState } from 'react';
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

  const handleCheck = useCallback(
    (checked: boolean, list: SelectListsType, types: string) => {
      if (checked) {
        dispatch(setSelect({ list, types }));
      } else {
        dispatch(setDelete({ list, types }));
      }
    },
    [],
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
                checked={checkList.select[types].some(
                  (item) => item.id === list.id,
                )}
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
