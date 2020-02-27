import { APIUrl } from '../constants'
import axios from 'axios';

//Axios request url
const request = axios.create({
    baseURL: APIUrl
});

//Get all tags
export const getAll = () => (
    request.get('/tags.json')
);

//Create new tag
export const addOne = (tag) => (
    request.post('tags.json', tag)
);