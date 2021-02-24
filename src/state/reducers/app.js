import {PAGES} from "../../pages";
import {SET_ACTIVE_PAGE, SIGN_OUT, SET_PROFILE, SET_TOKEN} from "../actions/app";
import {LOCALSTORAGE_TOKEN_KEY} from "../../services/axios";

const defaultAppState = {
    activePage: PAGES.SIGN_IN,
    token: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY),
    profile: undefined
};

function getDefaultAuthenticatedPage(profile) {
    switch (profile.user_type) {
        case "PR": // TODO: Differentiate
        case "ST":
        default:
            return PAGES.DELIVERABLES;
    }
}

export function appStateReducer(state = defaultAppState, action) {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.payload.newActivePage
            };
        case SIGN_OUT:
            localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY)
            return {
                ...state,
                activePage: PAGES.SIGN_IN,
                token: null,
                profile: undefined
            };
        case SET_TOKEN:
            const {newToken} = action.payload;
            localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, newToken);
            return {
                ...state,
                token: newToken
            }
        case SET_PROFILE:
            const {newProfile} = action.payload;
            return {
                ...state,
                activePage: getDefaultAuthenticatedPage(newProfile),
                profile: newProfile
            };
        default:
            return state;
    }
}
