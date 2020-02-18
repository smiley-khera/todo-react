//Contains all actions of To-do-Items
import {
    REMOVE_TAG_FROM_TODO,
    DELETE_TODO,
    RESTORE_TODO_ITEM,
    ADD_TODO_ITEM,
    ASSIGN_TAG,
    UPDATE_TODO
} from "../constants";
import {removeTag, deleteTodoItem, restoreTodoItem, addTodoItem, assignTag, updateTodo} from "../apis/todos"
import store from '../store';
import {setVisibilityFilter} from "./menu";

//***Sync actions creators***

// Action Creator to remove tag form to-do
export const removeTagRequest = (item) =>
    ({
        type: REMOVE_TAG_FROM_TODO,
        payload: item
    });

// Action Creator to delete to-do
export const deleteTodo = (todoId) =>
    ({
        type: DELETE_TODO,
        payload: todoId
    });

// Action Creator to restore to-do item
export const restoreTodo = (todoId) =>
    ({
        type: RESTORE_TODO_ITEM ,
        payload: todoId
    });

// Action Creator to add new to-do
export const addTodo = (todo) =>
    ({
        type: ADD_TODO_ITEM ,
        payload: todo
    });

// Action Creator to assign existing tag to to-do
export const assignTagToTodo = (todo) =>
    ({
        type: ASSIGN_TAG,
        payload: todo
    });

// Action Creator to update to-do
export const updateTodoItem = (todo) =>
    ({
        type: UPDATE_TODO,
        payload: todo
    });

// ***Async actions creators***

//Action Creator to remove tag from to-do async. and dispatch an action
export const removeTagOfTodoItem = (item,tag) => dispatch => (
    removeTag(item,tag).then(res => {
        dispatch(removeTagRequest(res.data))
    })
);

//Action Creator to delete to-do async. and dispatch an action
export const deleteTodoRequest = (todoId) => dispatch => (
    deleteTodoItem(todoId).then(res => {
        dispatch(deleteTodo(todoId))
    })
);

//Action Creator to restore to-do async. and dispatch an action
export const restoreTodoItemRequest = (todoId) => dispatch => (
    restoreTodoItem(todoId).then(res => {
        dispatch(restoreTodo(todoId))
    })
);

//Action Creator to add new to-do async. and dispatch an action
export const addTodoItemRequest = (todo) => dispatch => (
    addTodoItem(todo).then(res => {
        dispatch(addTodo(res.data));
        dispatch(setVisibilityFilter(store.getState().visibilityFilter));
    })
);

//Action Creator to assign tag to to-do async. and dispatch an action
export const assignTagRequest = (todo, tag) => dispatch => (
    assignTag(todo, tag).then(res => {
        dispatch(assignTagToTodo(res.data))
    })
);

//Action Creator to update to-do async. and dispatch an action
export const updateTodoRequest = (todoId, todo) => dispatch => (
    updateTodo(todoId, todo).then(res => {
        dispatch(updateTodoItem(res.data))
    })
);