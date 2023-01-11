import { applyMiddleware, legacy_createStore ,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import {appReducer  } from "./app/reducer";
import { authReducer } from "./auth/reducer";


const rootReduser=combineReducers({
    app:appReducer,
    auth:authReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReduser, composeEnhancers(applyMiddleware(thunk)));