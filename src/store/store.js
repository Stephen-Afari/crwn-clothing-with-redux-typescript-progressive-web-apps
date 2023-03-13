import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './root-saga'
//import thunk from "redux-thunk";
//import logger from "redux-logger";
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type:", action.type);
//   console.log("payload:", action.payload);
//   console.log("currentState:", store.getState());
//   next(action);
//   console.log("next state:", store.getState());
// };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

// const thunkMiddleware = (store)=>(next)=>(action)=>{
//   if(typeof(action)==='function'){
//     action(dispatch)
//   }
// }
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window & window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
