import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['hospdata']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [sagaMiddleware, logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);