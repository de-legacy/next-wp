export const GET_POSTS_LOADING = 'GET_POSTS_LOADING';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export const LOAD_MORE_POSTS_LOADING = 'LOAD_MORE_POSTS_LOADING';
export const LOAD_MORE_POSTS_ERROR = 'LOAD_MORE_POSTS_ERROR';
export const LOAD_MORE_POSTS_SUCCESS = 'LOAD_MORE_POSTS_SUCCESS';

import Posts from '../api/postsApi';

export const getPosts = (params) => dispatch => {
  dispatch({
    loadedAt: new Date().toJSON(),
    persistExpiresAt: 10,
    type: GET_POSTS_LOADING,
    payload: {
      meta: {
        status: 'loading',
        message: ''
      },
      data: []
    }
  })

  return Posts.getPosts(params).then(result => {
    if (result.meta.status === 'success') {
      dispatch({
        loadedAt: new Date().toJSON(),
        type: GET_POSTS_SUCCESS,
        payload: result
      })
    } else {
      dispatch({
        loadedAt: new Date().toJSON(),
        type: GET_POSTS_ERROR,
        payload: result
      })
    }
  })
}

export const loadMorePosts = (params) => dispatch => {
  dispatch({
    type: LOAD_MORE_POSTS_LOADING,
    payload: {
      meta: {
        status: 'loading',
        message: ''
      },
      data: []
    }
  })

  return Posts.getPosts(params).then(result => {
    
    if (result.meta.status === 'success') {
      dispatch({
        type: LOAD_MORE_POSTS_SUCCESS,
        payload: result
      })
    } else {
      dispatch({
        type: LOAD_MORE_POSTS_ERROR,
        payload: result
      })
    }
  })
}