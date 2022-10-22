import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";

export const reducers = combineReducers({authReducer, userReducer})