import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";

const rootReducer=combineReducers({
    authReducer
    })

export const Store=createStore(
    rootReducer,
    applyMiddleware(thunk)
)