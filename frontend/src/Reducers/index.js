import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";
import chatReducer from "./ChatReducer";

export const reducers = combineReducers({authReducer, userReducer, chatReducer})