'use client';

import { IconArrowUp, IconReset } from '@/public/svgs';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from '..';
import SelectList from './_components/SelectList';
import PriceTable from './_components/PriceTable';
import { setClose, setDetailState } from '../../_utils/detailState';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  InitialStateType,
  setReset,
  setSelect,
} from '../../_utils/styleSetting';
import {
  setCheckStandBy,
  setResetAllStandBy,
  setResetStandBy,
} from '../../_utils/checkStandByState';
import { useRouter } from 'next/navigation';
interface TypeInfoType {
  id: number;
  type: string;
  name: string;
  isDone: boolean;
  isCheck: boolean;
}

interface Props {
  children: ReactNode;
  typeInfo: TypeInfoType;
  handleDropClick: (id: number) => void;
  selectLength: boolean;
  isPriceReset: boolean;
  setIsPriceReset: Dispatch<SetStateAction<boolean>>;
}

interface LengthType {
  [key: string]: string;
  '2': string;
  '5': string;
}

export interface CheckStandByListType {
  [key: string]: InitialStateType[];
  stay: InitialStateType[];
  facilities: InitialStateType[];
  theme: InitialStateType[];
  trip: InitialStateType[];
}

export interface PriceType {
  startPrice: string;
  endPrice: string;
}

const LENTH: LengthType = {
  '2': 'w-90pxr',
  '5': 'w-121pxr',
};

function Selectable({
  children,
  typeInfo,
  handleDropClick,
  selectLength,
  isPriceReset,
  setIsPriceReset,
}: Props) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const StandByList = useAppSelector((state) => state.checkStandBy);
  const divRef = useRef<HTMLDivElement>(null);
  const buttomRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const checkList = useAppSelector((state) => state.styleSetting);
  const [currentTypes, setCurrentTypes] = useState('');
  const [isError, setIsError] = useState(false);
  const [isFinalCheckDone, setIsFinalCheckDone] = useState(false);
  const [price, setPrice] = useState({
    startPrice: '0',
    endPrice: '0',
  });
  const [sumOfMoney, setSumOfMoney] = useState({
    startPrice: price.startPrice,
    endPrice: price.endPrice,
  });

  const router = useRouter();

  //dropdown열고&닫기
  const handleOpen = () => {
    if (!handleDropClick) return;
    const types = typeInfo.name;

    if (!isMobile) {
      dispatch(setResetAllStandBy());
      setPrice({ startPrice: '0', endPrice: '0' });
      setSumOfMoney({ startPrice: '0', endPrice: '0' });
      /*     console.log('dropdown열고&닫기 pc sumOfMoney', sumOfMoney);
      console.log('dropdown열고&닫기 pc price', price); */
    }

    if (!isMobile && checkList.select[types].length > 0) {
      checkList.select[types].map((list) => {
        dispatch(setCheckStandBy({ types, list }));
      });
    }

    handleDropClick(typeInfo.id);
  };

  //가격 객체 새로 만들어서 대기상태와 확정상태로 넣기
  const getNewPrice = (types: string, size = 'pc') => {
    const list = {
      id: 0,
      type: `${price.startPrice}원-${price.endPrice}원`,
    };
    /*     console.log('getNewPrice에 담을 list', list); */
    if (size !== 'mobile') {
      dispatch(setSelect({ list, types }));
      setCurrentTypes(types);
      setIsFinalCheckDone(true);
      /*    console.log('checklist에 담기', checkList); */
    } else {
      if (price.endPrice === '0') {
        setIsPriceReset(true);
        return;
      }
      dispatch(setCheckStandBy({ types, list }));
      /*   console.log('모바일stanby에 담기', StandByList); */
    }
    /*     console.log('조건문 나온 후 checklist에 담기 확인 ', checkList); */
  };

  //pc&tablet 선택 확정
  const handleFinalCheck = (types: string) => {
    dispatch(setReset(types));

    if (types !== 'prices') {
      StandByList[types].map((list) => {
        dispatch(setSelect({ list, types }));
      });
      setCurrentTypes(types);
      setIsFinalCheckDone(true);
    } else {
      /*       console.log('가격 확정'); */
      if (
        sumOfMoney.startPrice.replaceAll(',', '') <
        sumOfMoney.endPrice.replaceAll(',', '')
      ) {
        /*      console.log('getNewPrice 이동'); */
        getNewPrice(types);
      }
    }
    if (StandByList[types].length <= 0) {
      dispatch(setDetailState(typeInfo.id));
      return removeAndRedirectUrl(types);
    }
    dispatch(setDetailState(typeInfo.id));
  };

  //외부 클릭시 닫기
  const handleClickOutside = (event: any) => {
    if (!divRef.current || !buttomRef.current) return;
    if (divRef.current && !buttomRef.current.contains(event.target)) {
      const types = typeInfo.name;
      dispatch(setResetAllStandBy());
      if (checkList.select[types].length > 0) {
        checkList.select[types].map((list) => {
          dispatch(setCheckStandBy({ types, list }));
        });
      }
      dispatch(setClose(false));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //초기화
  const handleReset = (type: string) => {
    dispatch(setReset(type));
    dispatch(setResetStandBy(type));
    setPrice({
      startPrice: '0',
      endPrice: '0',
    });
    setIsPriceReset(true);
    removeAndRedirectUrl(type);
  };

  /* 필터 적용 눌렀을 떄 쿼리스트링 적용 */
  const redirectUrl = (types: string) => {
    const params = new URLSearchParams(window.location.search);
    params.delete(types);
    const newValues = checkList.select[types].map((el) => el.type).join(',');
    if (newValues) {
      params.set(types, newValues);
    }
    const newSearch = params.toString();
    router.push(`/search/?${newSearch}`);
  };
  /* 쿼리스트링 제거 */
  const removeAndRedirectUrl = (typeToRemove: string) => {
    const params = new URLSearchParams(window.location.search);
    const filteredEntries = Array.from(params.entries()).filter(
      ([key]) => key !== typeToRemove,
    );
    const newParams = new URLSearchParams();
    filteredEntries.forEach(([key, value]) => newParams.set(key, value));
    const newSearch = newParams.toString();
    router.push(`/search/?${newSearch}`);
  };

  useEffect(() => {
    if (currentTypes && isFinalCheckDone) {
      redirectUrl(currentTypes);
    }
    setIsFinalCheckDone(false);
    /*   console.log('useEffect에서 checklist에 담기 확인 ', checkList); */
    return () => {};
  }, [checkList, currentTypes, isFinalCheckDone]);

  const isTextLength = () => {
    if (!children) return;
    return children.toString().length > 3;
  };

  const isDisabled = (type: string) => {
    switch (type) {
      case 'prices':
        return sumOfMoney.endPrice && sumOfMoney.endPrice !== '0' && !isError
          ? false
          : true;
      default:
        return StandByList[typeInfo.name].length > 0 ||
          checkList.select[typeInfo.name].length > 0
          ? false
          : true;
    }
  };

  return (
    <>
      <div
        className={`h-48pxr ${isTextLength() && !isMobile ? LENTH[5] : LENTH[2]} relative rounded-full border bg-white font-medium mobile:flex mobile:h-full mobile:w-full mobile:flex-col mobile:rounded-none mobile:border-none ${typeInfo.isDone ? 'border-primary100' : 'border-gray300'}`}
        ref={buttomRef}
      >
        <div
          id='selectable'
          className='flex cursor-pointer items-center gap-3pxr py-12pxr pl-20pxr pr-14pxr mobile:justify-between mobile344:px-24pxr mobileMiddle:px-40pxr'
          onClick={handleOpen}
        >
          <h3
            className={`whitespace-nowrap text-gray600 ${typeInfo.isDone ? 'text-primary100' : 'text-gray300'} font-body2-medium mobile:text-black mobile:font-title3-semibold ${selectLength ? 'reserve-lineOver' : ''}`}
          >
            {children}
          </h3>
          <div className={`${typeInfo.isDone ? '' : 'arrowDown'}`}>
            <IconArrowUp fill='#949494' />
          </div>
        </div>
        {typeInfo.isDone && (
          <div
            className={`absolute left-0pxr top-66pxr rounded-[20px] bg-white shadow-searchBar mobile:static ${typeInfo.name === 'theme' || typeInfo.name === 'trip' ? 'tablet:-left-208pxr' : ''} `}
            ref={divRef}
          >
            <ul
              className={`scrollbar-hide flex w-320pxr flex-col justify-between gap-20pxr overflow-auto px-20pxr pb-20pxr pt-24pxr mobile:w-full mobile:overflow-y-auto mobile:bg-gray100  ${typeInfo.name !== 'prices' ? 'h-249pxr mobile:h-221pxr mobile:px-40pxr' : ' mobile:px-16pxr mobile:py-12pxr  mobile344:h-full mobileMiddle:h-full'} ${typeInfo.name === 'trip' ? '!h-200pxr' : ''}`}
              data-name='drap'
            >
              {typeInfo.name !== 'prices' ? (
                <SelectList types={typeInfo.name} />
              ) : (
                <PriceTable
                  setPrice={setPrice}
                  price={price}
                  getNewPrice={getNewPrice}
                  types={typeInfo.name}
                  isPriceReset={isPriceReset}
                  setIsPriceReset={setIsPriceReset}
                  sumOfMoney={sumOfMoney}
                  setSumOfMoney={setSumOfMoney}
                  isError={isError}
                  setIsError={setIsError}
                />
              )}
            </ul>
            <div className='flex-center h-88pxr gap-8pxr border-t border-b-white px-20pxr py-16pxr mobile:m-auto mobile:hidden mobile:max-w-400pxr mobile:px-20pxr'>
              <div
                className='flex-center cursor-pointer gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'
                onClick={() => handleReset(typeInfo.name)}
              >
                초기화
                <IconReset fill='#C8C8C8' />
              </div>
              <Button.Round
                size='sm'
                custom={`w-174pxr h-56pxr disabled:pointer-events-none`}
                disabled={isDisabled(typeInfo.name)}
                onClick={() => handleFinalCheck(typeInfo.name)}
              >
                적용
              </Button.Round>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Selectable;
