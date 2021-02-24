import {appStateReducer} from "./app";
import {combineReducers} from "redux";
import {deliverableStateReducer} from "./deliverables";

export const rootReducer = combineReducers({
    appState: appStateReducer,
    deliverables: deliverableStateReducer
});
