import {SET_ACTIVE_COURSE, SET_COURSES, SET_IS_LOADING, SET_ERROR_MESSAGE} from "../actions/professorCourses";

const defaultProfessorCoursesState = {
    activeCourse: null,
    courses: null,
    isLoading: false,
    errorMessage: null
};

export function professorCoursesStateReducer(state=defaultProfessorCoursesState, action) {
    switch (action.type) {
        case SET_ACTIVE_COURSE:
            return {
                ...state,
                activeCourse: action.payload.newActiveCourse
            };

        case SET_COURSES:
            return {
                ...state,
                isLoading: false,
                courses: action.payload.newCourses
            };
        case SET_IS_LOADING:
            return {
                ...state,
                activeCourse: null,
                courses: null,
                errorMessage: null,
                isLoading: true
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                activeCourse: null,
                courses: null,
                errorMessage: action.payload.errorMessage,
                isLoading: false
            };
        default:
            return state;
    }
}