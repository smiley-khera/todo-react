import {
    DELETE_TODO,
    FETCH_TODO_ITEMS,
    REMOVE_TAG_FROM_TODO,
    FETCH_ARCHIVED_TODOS,
    RESTORE_TODO_ITEM,
    ADD_TODO_ITEM, ASSIGN_TAG
} from "../constants";

const INITIAL_STATE = [];

export const todoItems = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TODO_ITEMS:
            return action.payload;
        case REMOVE_TAG_FROM_TODO:
            return state.map(element => {
                    const newTags = (action.payload.todo_item.tags.map(t => t.id));
                    if (element.todo_item.id.$oid === action.payload.todo_item.id.$oid) {
                        element.todo_item.tags = element.todo_item.tags.filter(tag => newTags.includes(tag.id))
                    }
                    return element
                }
            );
        case DELETE_TODO:
            return state.filter(e =>
                        e.todo_item.id.$oid !== action.payload);
        case FETCH_ARCHIVED_TODOS:
            return action.payload;
        case RESTORE_TODO_ITEM:
            return state.filter(e =>
                e.todo_item.id.$oid !== action.payload);
        case ADD_TODO_ITEM:
            return [...state, action.payload];
        case ASSIGN_TAG:
            state.map(element => {
               // if (element.todo_item.id.$oid != action.payload.todo_item.id.$oid) {
                    element.todo_item.tags = action.payload.todo_item.tags;
                //}
                return element
            });

        default:
            return state
    }
};