// Menu Items Constants
export const MenuItems = [
    {
        name: 'Inbox',
        multiple: false,
        open: false
    },
    {
        name: 'Tags',
        multiple: true,
        open: false
    }
];
export const TOGGLE_NESTED_MENU_ITEMS = 'TOGGLE_NESTED_MENU_ITEMS';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//Module - Tag constants
export const FETCH_TAGS = 'FETCH_TAGS';
export const ADD_TAG = 'ADD_TAG';

//Module- To-do Item constants
export const REMOVE_TAG_FROM_TODO = 'REMOVE_TAG_FROM_TODO';
export const FETCH_TODO_ITEMS = 'FETCH_TODO_ITEMS';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_ARCHIVED_TODOS = 'FETCH_ARCHIVED_TODO';
export const RESTORE_TODO_ITEM = 'RESTORE_TODO_ITEM';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const ASSIGN_TAG = 'ASSIGN_TAG';
export const UPDATE_TODO = 'UPDATE_TODO';

//Environmental Constants
export const APIUrl = "http://localhost:3001/api/v1";
