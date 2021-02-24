import {
    SET_ACTIVE_DELIVERABLE_SUBMISSION,
    SET_DELIVERABLE_SUBMISSIONS, SET_ERROR_MESSAGE, SET_IS_LOADING,
} from "../actions/deliverables";
import {momentizeSubmission} from "../../utils";

const defaultDeliverableState = {
    activeDeliverableSubmission: null,
    deliverableSubmissions: null,
    isLoading: false,
    errorMessage: null
};

export function deliverableStateReducer(state = defaultDeliverableState, action) {
    switch (action.type) {
        case SET_ACTIVE_DELIVERABLE_SUBMISSION:
            return {
                ...state,
                activeDeliverableSubmission: action.payload.newActiveDeliverableSubmission
            };

        case SET_DELIVERABLE_SUBMISSIONS:
            const deliverableSubmissions = action.payload.newDeliverableSubmissions.map(momentizeSubmission);
            return {
                ...state,
                activeDeliverableSubmission: null,
                deliverableSubmissions,
                isLoading: false,
                errorMessage: null
            };
        case SET_ERROR_MESSAGE:
            const {errorMessage} = action.payload;
            return {
                ...state,
                isLoading: false,
                errorMessage
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
                activeDeliverableSubmission: null,
                deliverableSubmissions: null,
            };

        default:
            return state;
    }
}
