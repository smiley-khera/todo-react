import { APIUrl } from '../constants'
import axios from 'axios';

const request = axios.create({
    baseURL: APIUrl
});

const assignTagBody = (tag) => (
    {todo_item: {tag_ids: [tag]}}
);

export const getAll = (tagId = null) => (
    (tagId) ? request.get(`tags/${tagId}/todo_items.json?page=1`) : request.get('/todo_items.json?page=1')
);

export const removeTag = (todoId, tagId) => (
  request.patch(`todo_items/${todoId}/remove_tag.json`, {todo_item: {tag_id: tagId}})
);

export const deleteTodoItem = (todoId) => (
    request.delete(`todo_items/${todoId}.json`)
);

export const getArchiveTodoItems = () => (
    request.get('todo_items/archive.json')
);

export const restoreTodoItem = (todoId) => (
    request.patch(`todo_items/${todoId}/restore.json`)
);

export const addTodoItem = (todo) => (
  request.post('todo_items.json', todo)
);

export const assignTag = (todo, tag) => (
    request.patch(`todo_items/${todo}/add_tags.json`, assignTagBody(tag))
)