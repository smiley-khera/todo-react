import { APIUrl } from '../constants'
import axios from 'axios';

const request = axios.create({
    baseURL: APIUrl
});

export const getAll = () => (
    request.get('/tags.json?page=1')
);

export const addOne = (tag) => (
    request.post('tags.json', tag)
);