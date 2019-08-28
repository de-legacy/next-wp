export const GET_SITE_INFO_LOADING = 'GET_SITE_INFO_LOADING';
export const GET_SITE_INFO_SUCCESS = 'GET_SITE_INFO_SUCCESS';
export const GET_SITE_INFO_ERROR = 'GET_SITE_INFO_ERROR';

import Site from '../api/siteApi'

export const getSiteInfo = () => dispatch => {
  dispatch({
    type: GET_SITE_INFO_LOADING,
    payload: {
      meta: {
        status: 'loading',
        message: ''
      },
      data: []
    }
  })

  return Site.getSiteInfo().then(result => {
    if (result.meta.status === 'success') {
      dispatch({
        type: GET_SITE_INFO_SUCCESS,
        payload: result
      })
    } else {
      dispatch({
        type: GET_SITE_INFO_ERROR,
        payload: result
      })
    }
  })
}