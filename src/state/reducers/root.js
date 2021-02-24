import {appStateReducer} from "./app";
import {combineReducers} from "redux";
import {deliverableStateReducer} from "./deliverables";
import {professorCoursesStateReducer} from "./professorCourses";

export const rootReducer = combineReducers({
    appState: appStateReducer,
    deliverables: deliverableStateReducer,
    professorCourses: professorCoursesStateReducer
});
