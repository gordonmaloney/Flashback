import axios from 'axios';

//const API = axios.create({baseURL: 'http://localhost:5000' });
const API = axios.create({baseURL: 'https://flashbackflashcards.herokuapp.com' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const updateDate = (id, newDate) => API.patch(`/posts/${id}`, newDate)
export const addComment = (id, newPost) => API.post(`/posts/${id}`, newPost)

export const updateComment = (id, commentId, updatedComment) => API.patch(`/posts/${id}/${commentId}`, updatedComment)
export const deleteComment = (id, commentId) => API.delete(`/posts/${id}/${commentId}`)