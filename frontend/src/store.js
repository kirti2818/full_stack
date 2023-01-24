
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./redux/auth/auth.reducer"

const rootReducer = combineReducers ({
    auths : authReducer
})
export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))