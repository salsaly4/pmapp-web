/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
