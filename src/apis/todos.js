import { APIUrl } from '../constants'
import axios from 'axios';

//Axios request
const request = axios.create({
    baseURL: APIUrl
});

// Method that formats the JSON body of creating new to-do
const tagRequestBody = (tag) => (
    {todo_item: {tag_ids: [tag]}}
);

//Fetches all to-do items of specific tag or all to-dos irrespective of tag
export const getAll = (tagId = null) => (
    (tagId) ? request.get(`tags/${tagId}/todo_items.json`) : request.get('/todo_items.json')
);

//remove specific tag from to-do
export const removeTag = (todoId, tagId) => (
  request.patch(`todo_items/${todoId}/remove_tag.json`, {todo_item: {tag_id: tagId}})
);

//Delete to-do item
export const deleteTodoItem = (todoId) => (
    request.delete(`todo_items/${todoId}.json`)
);

//Get archive to-do items
export const getArchiveTodoItems = () => (
    request.get('todo_items/archive.json')
);

//Restore deleted to-do item
export const restoreTodoItem = (todoId) => (
    request.patch(`todo_items/${todoId}/restore.json`)
);

//Add new to-do item
export const addTodoItem = (todo) => (
  request.post('todo_items.json', todo)
);

//Associate a tag to to-do item
export const assignTag = (todo, tag) => (
    request.patch(`todo_items/${todo}/add_tags.json`, tagRequestBody(tag))
);

//Update to-do item
export const  updateTodo = (todoId, todo) => (
    request.patch(`todo_items/${todoId}.json`, todo)
);