import {REMOVE_TAG_FROM_TODO, DELETE_TODO, RESTORE_TODO_ITEM, ADD_TODO_ITEM, ASSIGN_TAG} from "../constants";
import {removeTag, deleteTodoItem, restoreTodoItem, addTodoItem, assignTag} from "../apis/todos"
import store from '../store';
import {setVisibilityFilter} from "./menu";

// Sync actions creators

export const removeTagRequest = (item) =>
    ({
        type: REMOVE_TAG_FROM_TODO,
        payload: item
    });


export const deleteTodo = (todoId) =>
    ({
        type: DELETE_TODO,
        payload: todoId
    });

export const restoreTodo = (todoId) =>
    ({
        type: RESTORE_TODO_ITEM ,
        payload: todoId
    });
export const addTodo = (todo) =>
    ({
        type: ADD_TODO_ITEM ,
        payload: todo
    });

export const assignTagToTodo = (todo) =>
    ({
        type: ASSIGN_TAG,
        payload: todo
    });
//Async actions creators

export const removeTagOfTodoItem = (item,tag) => dispatch => (
    removeTag(item,tag).then(res => {
        dispatch(removeTagRequest(res.data))
    })
);

export const deleteTodoRequest = (todoId) => dispatch => (
    deleteTodoItem(todoId).then(res => {
        dispatch(deleteTodo(todoId))
    })
);

export const restoreTodoItemRequest = (todoId) => dispatch => (
    restoreTodoItem(todoId).then(res => {
        dispatch(restoreTodo(todoId))
    })
);

export const addTodoItemRequest = (todo) => dispatch => (
    addTodoItem(todo).then(res => {
        dispatch(addTodo(res.data));
        dispatch(setVisibilityFilter(store.getState().visibilityFilter));
    })
);

export const assignTagRequest = (todo, tag) => dispatch => (
    assignTag(todo, tag).then(res => {
        console.log("ddd" + JSON.stringify((res.data)));
        dispatch(assignTagToTodo(res.data))
    })
);