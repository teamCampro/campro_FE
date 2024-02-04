import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import { DETAIL } from '@/src/app/_constants';
import { DetailType } from '@/src/app/_constants/detail';
import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
import { CheckStandByListType } from '../Selectable';
import {
  setCheckStandBy,
  setDeleteStandBy,
  setResetAllStandBy,
} from '@/src/app/_utils/checkStandByState';
interface SelectListType {
  types?: string;
  isCheck: boolean;
  isReset: boolean;
  checkStandByList: CheckStandByListType;
  setCheckStandByList: Dispatch<SetStateAction<CheckStandByListType>>;
}

interface SelectListOptionType {
  id: number;
  type: string;
}

function SelectList({
  types,
  isCheck,
  isReset,
  checkStandByList,
  setCheckStandByList,
}: SelectListType) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const checkList = useAppSelector((state) => state.styleSetting);
  const StandByList = useAppSelector((state) => state.checkStandBy);
  const dispatch = useAppDispatch();

  const handleCheck = (
    e: ChangeEvent<HTMLInputElement>,
    list: SelectListOptionType,
    types: string,
  ) => {
    const { name, checked, id, value } = e.target;
    /*  console.log(name, checked, types, value, list); */

    if (checked) {
      if (checkStandByList[types].includes(list)) return;
      dispatch(setCheckStandBy({ types, list }));
      /*  setCheckStandByList({
        ...checkStandByList,
        [types]: [...checkStandByList[types], list],
      }); */
    } else {
      dispatch(setDeleteStandBy({ types, list }));
      /*  setCheckStandByList({
        ...checkStandByList,
        [types]: checkStandByList[types].filter((item) => item.id !== list.id),
      }); */
    }
    /* if (isMobile && checked) {
      dispatch(setSelect({ list, types }));
    } */
  };

  const checkOption = (types: string, list: DetailType) => {
    /* if (isMobile && !isCheck) {
      return StandByList[types].some((item) => item.id === list.id);
    } */
    /* if (isReset) {
      return StandByList[types].some((item) => item.id === list.id);
    } */

    return StandByList[types].some((item) => item.id === list.id);
  };

  return (
    <>
      {types &&
        DETAIL[types].map((list) => {
          return (
            <li key={list.id}>
              <label
                htmlFor={list.type}
                className='flex-center justify-between'
              >
                <h3>{list.type}</h3>
                <input
                  type='checkbox'
                  name='checkList'
                  /* id={list.type}
                  value={list.type} */
                  checked={checkOption(types, list)}
                  onChange={(e) => handleCheck(e, list, types)}
                />
              </label>
            </li>
          );
        })}
    </>
  );
}

export default SelectList;
