import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import rootReducer from './reducers/combineReducers'; // /assuming you have a rootReducer

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter', 'scrolling']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
