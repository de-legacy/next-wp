export const GET_INDEX_POSTS_LOADING = 'GET_INDEX_POSTS_LOADING';
export const GET_INDEX_POSTS_ERROR = 'GET_INDEX_POSTS_ERROR';
export const GET_INDEX_POSTS_SUCCESS = 'GET_INDEX_POSTS_SUCCESS';

import Posts from '../api/postsApi';

export const getIndexPosts = () => dispatch => {
  dispatch({
    type: GET_INDEX_POSTS_SUCCESS,
    payload: {
      meta: {
        status: 'loading',
        message: ''
      },
      data: []
    }
  })

  return Posts.getPosts().then(result => {
    if (result.meta.status === 'success') {
      dispatch({
        type: GET_INDEX_POSTS_SUCCESS,
        payload: result
      })
    } else {
      dispatch({
        type: GET_INDEX_POSTS_ERROR,
        payload: result
      })
    }
  })
}