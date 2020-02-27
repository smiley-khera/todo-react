//Contains all action creators of Menu
import {addOne, getAll} from '../apis/tags'
import {getAll as TodosApi, getArchiveTodoItems} from '../apis/todos'
import {
    SET_VISIBILITY_FILTER,
    TOGGLE_NESTED_MENU_ITEMS,
    FETCH_TAGS,
    FETCH_TODO_ITEMS,
    FETCH_ARCHIVED_TODOS, ADD_TAG

} from "../constants";

// Dispatch an action of Visibility filter for to-do items
export const setVisibilityFilter = item => dispatch => {
    dispatch({type: SET_VISIBILITY_FILTER, payload: item});
    return item.name.includes("Archived")
        ? dispatch(fetchArchivedTodoItemsRequest())
        : dispatch(fetchTodoItems(item.id));
};

//Set an action to toggle nested menu items
export const toggleNestedMenuItems = item =>
    ({
        type: TOGGLE_NESTED_MENU_ITEMS,
        payload: item
    });

// Sync. Action creator after fetching archived to-do items
export const fetchArchivedTodoItems = (todoItems) =>
    ({
        type: FETCH_ARCHIVED_TODOS,
        payload: todoItems
    });

// Sync. Action creator after adding new tag
export const addTag = (tag) =>
    ({
        type: ADD_TAG,
        payload: tag
    });

// Action creator to fetch tags from server async.
// and dispatch sync. action once received
export const fetchTags = () => dispatch => {
    getAll().then(res => {
        dispatch({type: FETCH_TAGS, payload: res.data})
    })
};

// Action creator to fetch tags from server async.
// and dispatch sync. action once received
export const fetchTodoItems = (id = null) => dispatch => {
    TodosApi(id).then(res => {
        dispatch({type: FETCH_TODO_ITEMS, payload: res.data})
    })
};

// Action creator to fetch archived to-do items from server async.
// and dispatch sync. action once received
export const fetchArchivedTodoItemsRequest = () => dispatch => (
    getArchiveTodoItems().then(res => {
        dispatch(fetchArchivedTodoItems(res.data))
    })
);

// Action creator to add new tag on server async.
// and dispatch sync. action once added
export const addTagRequest = (tag) => (dispatch) => (
    addOne(tag).then(res => {
        dispatch(addTag(res.data));
    })
);