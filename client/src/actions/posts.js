import * as api from "../api";
import { FETCH, CREATE, UPDATE, DELETE, ADDCARD } from './ActionTypes'


export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    console.log("creating...", post)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.log(error);
  }
};



export const updateComment = (id, commentId, updatedComment) => async (dispatch) => {
  console.log("actioning...", id, commentId, updatedComment)

  try {
    const { data } = await api.updateComment(id, commentId, updatedComment);

    dispatch({ type: UPDATE, payload: data });

  } catch (error) {
    console.log(error);
  }
};


export const deleteComment = (id, commentId) => async (dispatch) => {
  try {
    console.log("deleting...", id, commentId)
    const { data } = await api.deleteComment(id, commentId);

    dispatch({ type: UPDATE, payload: data });
    
  } catch (error) {
    console.log(error);
  }
};


export const addComment = (id, newPost) => async (dispatch) => {
  try {
    console.log("adding card...", id, newPost)
    
    const { data } = await api.addComment(id, newPost);

    dispatch({ type: ADDCARD, payload: data });
    
  } catch (error) {
    console.log(error);
  }
};

export const updateDate = (id, newDate) => async (dispatch) => {
  try {
    console.log("updating last studied date...", id, newDate)
    
    const { data } = await api.updateDate(id, newDate);

    dispatch({ type: UPDATE, payload: data });
    
  } catch (error) {
    console.log(error);
  }
};