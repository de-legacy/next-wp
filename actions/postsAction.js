export const GET_POSTS_LOADING = 'GET_POSTS_LOADING';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

import Posts from '../api/postsApi';

export const getPosts = (params) => dispatch => {
  dispatch({
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
        type: GET_POSTS_SUCCESS,
        payload: result
      })
    } else {
      dispatch({
        type: GET_POSTS_ERROR,
        payload: result
      })
    }
  })
}