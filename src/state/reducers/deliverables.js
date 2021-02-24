import {
    SET_ACTIVE_DELIVERABLE_SUBMISSION,
    SET_DELIVERABLE_SUBMISSIONS, SET_ERROR_MESSAGE, SET_IS_LOADING,
    SET_SEARCH_KEYWORD
} from "../actions/deliverables";

const defaultDeliverableState = {
    activeDeliverableSubmission: null,
    deliverableSubmissions: null,
    displayDeliverableSubmissions: null,
    searchKeyword: "",
    isLoading: false,
    errorMessage: null
};

const isSearchMatch = (keyword, candidate) =>
    candidate.includes(keyword.trim().toLowerCase());

export function deliverableStateReducer(state = defaultDeliverableState, action) {
    switch (action.type) {
        case SET_ACTIVE_DELIVERABLE_SUBMISSION:
            return {
                ...state,
                activeDeliverableSubmission: action.payload.activeDeliverableSubmission
            };

        case SET_DELIVERABLE_SUBMISSIONS:
            console.log("Setting deliverables", action);
            const {newDeliverableSubmissions} = action.payload;
            return {
                ...state,
                activeDeliverableSubmission: null,
                deliverableSubmissions: newDeliverableSubmissions,
                displayDeliverableSubmission: newDeliverableSubmissions,
                searchKeyword: "", // Reset search when new deliverables come
                isLoading: false,
                errorMessage: null
            };

        case SET_SEARCH_KEYWORD:
            const searchKeyword = action.payload.newSearchKeyword;
            return {
                ...state,
                searchKeyword,
                displayDeliverableSubmissions: state.deliverableSubmissions
                    .filter(({deliverable: {name}}) => isSearchMatch(searchKeyword, name))
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
                displayDeliverableSubmissions: null
            };

        default:
            return state;
    }
}
