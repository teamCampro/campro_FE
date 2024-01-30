import { DETAIL } from '@/src/app/_constants';
import { CheckBox } from '../..';

interface SelectListType {
  types?: string;
}

function SelectList({ types }: SelectListType) {
  return (
    <>
      {types &&
        DETAIL[types].map((type, index) => {
          return (
            <li key={index} className='flex-center justify-between'>
              <h3>{type}</h3>
              <CheckBox />
            </li>
          );
        })}
    </>
  );
}

export default SelectList;
