import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';

export const useTsDispatch: () => AppDispatch = useDispatch;
export const useTsSelector: TypedUseSelectorHook<RootState> = useSelector;