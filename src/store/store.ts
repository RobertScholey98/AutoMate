import { createStore, Store, combineReducers, AnyAction, Reducer } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import AsyncStorage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import userReducer, { UserState, UserActions } from './reducers/userReducer';

interface RootState {
  user: UserState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer: Reducer<RootState, UserActions> = combineReducers({
  user: userReducer,
}) as unknown as Reducer<RootState, UserActions>;

const persistedReducer = persistReducer<RootState, UserActions>(persistConfig, rootReducer);

const store: Store<RootState, AnyAction> = createStore(persistedReducer);
const persistor: Persistor = persistStore(store);

export { store, persistor };