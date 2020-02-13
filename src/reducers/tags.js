import {ADD_TAG, FETCH_TAGS} from "../constants";

const INITIAL_STATE = [];

export const tags = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TAGS:
            return action.payload;
        case ADD_TAG:
            return [...state, action.payload];
        default:
            return state
    }
};