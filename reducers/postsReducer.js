import {
  GET_POSTS_LOADING,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS 
} from '../actions/postsAction';

const initialState = {
  meta: {
    status: 'loading',
    message: '',
  },
  data: [],
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return { ...state, ...action.payload }
    case GET_POSTS_ERROR:
      return { ...state, ...action.payload }
    case GET_POSTS_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return {
        ...state,
      }
  }
}