import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import userMarkers from './state/user-markers';
import currentUser from './state/current-user';
import filter from './state/filter';

const rootReducer = combineReducers({
  userMarkers,
  currentUser,
  filter,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
