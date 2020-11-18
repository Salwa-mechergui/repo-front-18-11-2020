import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";

const reduxdevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const initailState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initailState,
  compose(applyMiddleware(...middleware), reduxdevTools)
);

export default store;
