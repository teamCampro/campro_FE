import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { DETAIL } from '@/src/app/_constants';
import { DetailType } from '@/src/app/_constants/detail';
import { ChangeEvent } from 'react';
import {
  setCheckStandBy,
  setDeleteStandBy,
  setResetStandBy,
} from '@/src/app/_utils/checkStandByState';

interface SelectListType {
  types?: string;
}

interface SelectListOptionType {
  id: number;
  type: string;
}

function SelectList({ types }: SelectListType) {
  const StandByList = useAppSelector((state) => state.checkStandBy);
  const dispatch = useAppDispatch();

  const handleCheck = (
    e: ChangeEvent<HTMLInputElement>,
    list: SelectListOptionType,
    types: string,
  ) => {
    const { checked } = e.target;
    if (checked) {
      if (StandByList[types].includes(list)) return;
      /* 여행타입은 중복체크되면 안됨 */
      if (types === 'trip' && StandByList['trip'].length > 0) {
        dispatch(setResetStandBy('trip'));
      }
      dispatch(setCheckStandBy({ types, list }));
    } else {
      dispatch(setDeleteStandBy({ types, list }));
    }
  };

  const checkOption = (types: string, list: DetailType) => {
    return StandByList[types].some((item) => item.id === list.id);
  };

  return (
    <>
      {types &&
        DETAIL[types].map((list) => {
          return (
            <li key={list.id}>
              {types === 'trip' ? (
                <div
                  className={`flex-center relative justify-between font-body1-medium  ${StandByList[types].some((item) => item.id === list.id) ? 'text-primary100' : 'text-gray800'} selectRadio`}
                >
                  {list.type}
                  <input
                    type='radio'
                    name='radioList'
                    id={list.type}
                    value={list.type}
                    className='hidden '
                    /* checked={checkOption(types, list)} */
                    onChange={(e) => handleCheck(e, list, types)}
                  />
                  <label
                    htmlFor={list.type}
                    className={`${StandByList[types].some((item) => item.id === list.id) ? '' : 'labelStyle'}`}
                  ></label>
                </div>
              ) : (
                <label
                  htmlFor={list.type}
                  className={`flex-center relative justify-between font-body1-medium  ${StandByList[types].some((item) => item.id === list.id) ? 'text-primary100' : 'text-gray800'}`}
                >
                  {list.type}
                  <div>
                    <input
                      type='checkbox'
                      name='checkList'
                      id={list.type}
                      value={list.type}
                      checked={checkOption(types, list)}
                      onChange={(e) => handleCheck(e, list, types)}
                    />
                  </div>
                </label>
              )}
            </li>
          );
        })}
    </>
  );
}

export default SelectList;
