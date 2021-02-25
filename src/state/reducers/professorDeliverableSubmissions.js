import {SET_ERROR_MESSAGE, SET_IS_LOADING, SET_SUBMISSIONS} from "../actions/professorDeliverableSubmissions";

const defaultProfessorDeliverableSubmissionsState = {
    submissions: null,
    isLoading: false,
    errorMessage: null
};

export function professorDeliverableSubmissionsStateReducer(state = defaultProfessorDeliverableSubmissionsState, action) {
    switch (action.type) {
        case SET_SUBMISSIONS:
            return {
                ...state,
                submissions: action.payload.newSubmissions,
                isLoading: false,
                errorMessage: null
            };
        case SET_IS_LOADING:
            return {
                ...state,
                submissions: null,
                isLoading: true,
                errorMessage: null
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                submissions: null,
                isLoading: false,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
}