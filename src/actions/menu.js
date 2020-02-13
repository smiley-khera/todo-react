import {addOne, getAll} from '../apis/tags'
import {getAll as TodosApi, getArchiveTodoItems} from '../apis/todos'
import {
    SET_VISIBILITY_FILTER,
    TOGGLE_NESTED_MENU_ITEMS,
    FETCH_TAGS,
    FETCH_TODO_ITEMS,
    FETCH_ARCHIVED_TODOS, ADD_TAG

} from "../constants";

export const setVisibilityFilter = item => dispatch => {
    dispatch({type: 'SET_VISIBILITY_FILTER', payload: item});
    return item.name.includes("Archived")
        ? dispatch(fetchArchivedTodoItemsRequest())
        : dispatch(fetchTodoItems(item.id));
};

export const toggleNestedMenuItems = item =>
    ({
        type: TOGGLE_NESTED_MENU_ITEMS,
        payload: item
    });
export const fetchArchivedTodoItems = (todoItems) =>
    ({
        type: FETCH_ARCHIVED_TODOS,
        payload: todoItems
    });
export const addTag = (tag) =>
    ({
        type: ADD_TAG,
        payload: tag
    });
export const fetchTags = () => dispatch => {
    getAll().then(res => {
        dispatch({type: FETCH_TAGS, payload: res.data})
    })
};

export const fetchTodoItems = (id = null) => dispatch => {
    TodosApi(id).then(res => {
        dispatch({type: FETCH_TODO_ITEMS, payload: res.data})
    })
};

export const fetchArchivedTodoItemsRequest = () => dispatch => (
    getArchiveTodoItems().then(res => {
        dispatch(fetchArchivedTodoItems(res.data))
    })
);

export const addTagRequest = (tag) => (dispatch) => (
    addOne(tag).then(res => {
        dispatch(addTag(res.data));
    })
);