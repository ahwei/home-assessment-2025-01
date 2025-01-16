import { baseApi } from '@/services/baseApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import dialogReducer from './slices/dialogSlice';
import globalReducer from './slices/globalSlice';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  global: globalReducer,
  dialog: dialogReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
