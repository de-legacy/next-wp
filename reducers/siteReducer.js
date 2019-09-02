import {
  GET_SITE_INFO_LOADING,
  GET_SITE_INFO_ERROR,
  GET_SITE_INFO_SUCCESS,
  SET_SITE_INFO_SUCCESS
} from '../actions/siteAction';

const initialState = {
  meta: {
    status: 'loading',
    message: '',
  },
  data: [],
}

export default function site(state = initialState, action) {
  switch (action.type) {
    case GET_SITE_INFO_LOADING:
      return { ...state, ...action.payload }
    case GET_SITE_INFO_ERROR:
      return { ...state, ...action.payload }
    case GET_SITE_INFO_SUCCESS:
      return { ...state, ...action.payload }
    case SET_SITE_INFO_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return {
        ...state,
      }
  }
}