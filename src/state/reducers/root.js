import {appStateReducer} from "./app";
import {combineReducers} from "redux";
import {deliverableStateReducer} from "./deliverables";
import {professorCoursesStateReducer} from "./professorCourses";
import {courseDeliverableReducer} from "./courseDeliverables";
import {professorDeliverableSubmissionsStateReducer} from "./professorDeliverableSubmissions";

export const rootReducer = combineReducers({
    appState: appStateReducer,
    deliverables: deliverableStateReducer,
    professorCourses: professorCoursesStateReducer,
    activeCourseDeliverables: courseDeliverableReducer,
    professorSubmissions: professorDeliverableSubmissionsStateReducer
});
