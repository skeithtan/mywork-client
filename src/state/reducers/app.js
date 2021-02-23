import {SignInPage, DeliverablePage} from "../../pages";
import {SET_ACTIVE_PAGE, SIGN_OUT, SIGN_IN} from "../actions/app";

const LOCALSTORAGE_TOKEN_KEY = "token";

const defaultAppState = {
    ActivePage: SignInPage,
    token: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY),
    profile: undefined
};

function getDefaultAuthenticatedPage(profile) {
    switch (profile.user_type) {
        case "PR": // TODO: Differentiate
        case "ST":
        default:
            return DeliverablePage;
    }
}

export function appStateReducer(state = defaultAppState, action) {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                ActivePage: action.payload.newActivePage
            };
        case SIGN_OUT:
            localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY)
            return {
                ...state,
                ActivePage: SignInPage,
                token: null,
                profile: undefined
            };
        case SIGN_IN:
            const {token, profile} = action.payload;
            localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
            return {
                ...state,
                ActivePage: getDefaultAuthenticatedPage(profile),
                token,
                profile
            };
        default:
            return state;
    }
}
