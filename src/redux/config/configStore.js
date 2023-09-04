import { createStore } from "redux";
import { combineReducers } from "redux";
import reduceToDo from "../modules/reduceToDo";
const rootReducer = combineReducers({
  reduceToDo,
});
const store = createStore(rootReducer);

export default store;
