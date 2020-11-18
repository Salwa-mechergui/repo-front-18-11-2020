import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import bookingReducer from "./bookReducer"

export default combineReducers({
  authReducer,
  errorReducer,
  bookingReducer
});

