import { combineReducers } from "redux";
import userReducer from "./userReducer";

const Reducer = combineReducers({
    users: userReducer
});

export default Reducer;