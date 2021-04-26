import { combineReducers } from "redux";
import logReducer from "./logReducer";
import staffReducer from "./staffReducer";

export default combineReducers({
  log: logReducer,
  staff: staffReducer,
});
