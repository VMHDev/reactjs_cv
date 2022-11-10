import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  createTransform,
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import omit from 'lodash/omit';

import { KEY_REDUX_PRESIT } from 'src/constants/commons';

import layoutReducer from 'src/layout/redux/layoutSlice';

const blacklistPaths: string[] = [];
const whitelistPaths: string[] = ['layout'];

const persistConfig = {
  key: KEY_REDUX_PRESIT,
  storage: storage,
  whitelist: whitelistPaths,
  blacklist: blacklistPaths.filter((a) => !a.includes('.')),
  transforms: [
    createTransform((inboundState: any, key: any) => {
      const blacklistPaths_forKey = blacklistPaths
        .filter((path) => path.startsWith(`${key}.`))
        .map((path) => path.substring(key.length + 1));
      return omit(inboundState, ...blacklistPaths_forKey);
    }, null),
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPTO_STORAGE_KEY as string,
      onError: function (error) {
        console.error('encryptTransform', error);
      },
    }),
  ],
};

const combinedReducer = combineReducers({
  layout: layoutReducer,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer) as typeof rootReducer;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
