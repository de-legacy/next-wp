import {
  GET_POSTS_LOADING,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  LOAD_MORE_POSTS_LOADING,
  LOAD_MORE_POSTS_ERROR,
  LOAD_MORE_POSTS_SUCCESS 
} from '../actions/postsAction';

const initialState = {
  persistExpiresAt: 10,
  loadedAt: new Date().toISOString(),
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
    case LOAD_MORE_POSTS_LOADING:
      return { ...state, meta: action.payload.meta}
    case LOAD_MORE_POSTS_ERROR:
      return { ...state, meta: action.payload.meta }
    case LOAD_MORE_POSTS_SUCCESS:
      Array.prototype.push.apply(state.data, action.payload.data);

      return { ...state, data: state.data, meta: action.payload.meta }
    default:
      return {
        ...state,
      }
  }
}