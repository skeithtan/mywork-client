import {
    SET_ACTIVE_COURSE_DELIVERABLE,
    SET_COURSE_DELIVERABLES,
    SET_ERROR_MESSAGE,
    SET_IS_LOADING
} from "../actions/courseDeliverables";
import {momentizeCourse} from "../../utils";
import {SET_ACTIVE_COURSE} from "../actions/professorCourses";

const defaultCourseDeliverableState = {
    activeCourseDeliverable: null,
    courseDeliverables: null,
    isLoading: false,
    errorMessage: null
};

export function courseDeliverableReducer(state = defaultCourseDeliverableState, action) {
    switch (action.type) {
        case SET_ACTIVE_COURSE:
            return {
                ...state,
                activeCourseDeliverable: null,
                courseDeliverables: null,
                isLoading: false,
                errorMessage: null
            }
        case SET_ACTIVE_COURSE_DELIVERABLE:
            return {
                ...state,
                activeCourseDeliverable: action.payload.newActiveCourseDeliverable
            };
        case SET_COURSE_DELIVERABLES:
            return {
                ...state,
                courseDeliverables: action.payload.newCourseDeliverables.map(momentizeCourse),
                activeCourseDeliverable: null,
                isLoading: false,
                errorMessage: null
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
                activeCourseDeliverable: null,
                courseDeliverables: null
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage,
                activeCourseDeliverable: null,
                courseDeliverables: null
            };
        default:
            return state;
    }
}