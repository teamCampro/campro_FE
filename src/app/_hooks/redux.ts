import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, rootState } from '../_store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
