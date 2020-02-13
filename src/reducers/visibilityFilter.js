import {SET_VISIBILITY_FILTER} from "../constants";

const INITIAL_STATE = {
    name: 'Inbox',
    id: null
};


export const visibilityFilter = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                name: action.payload.name,
                id: action.payload.id
            };
        default:
            return state
    }
};


