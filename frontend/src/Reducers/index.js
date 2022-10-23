import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";
import chatReducer from "./ChatReducer";
import messageReducer from "./MessageReducer";

export const reducers = combineReducers({authReducer, userReducer, chatReducer, messageReducer})