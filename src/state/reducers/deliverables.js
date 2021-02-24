import {
    SET_ACTIVE_DELIVERABLE_SUBMISSION,
    SET_DELIVERABLE_SUBMISSIONS, SET_ERROR_MESSAGE, SET_IS_LOADING,
} from "../actions/deliverables";
import moment from "moment";

const defaultDeliverableState = {
    activeDeliverableSubmission: null,
    deliverableSubmissions: null,
    isLoading: false,
    errorMessage: null
};

const transformDeliverableSubmission = submission => ({
    ...submission,
    date_submitted: submission.date_submitted && moment(submission.date_submitted),
    deliverable: {
        ...submission.deliverable,
        deadline: moment(submission.deadline),
        date_created: moment(submission.date_created)
    }
});

export function deliverableStateReducer(state = defaultDeliverableState, action) {
    switch (action.type) {
        case SET_ACTIVE_DELIVERABLE_SUBMISSION:
            return {
                ...state,
                activeDeliverableSubmission: action.payload.activeDeliverableSubmission
            };

        case SET_DELIVERABLE_SUBMISSIONS:
            const deliverableSubmissions = action.payload.newDeliverableSubmissions.map(transformDeliverableSubmission);
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
