import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: !__DEV__,
      serializableCheck: !__DEV__,
    }),
});

persistStore(store);
export default store;
