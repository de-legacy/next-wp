import { get } from "axios";
import { POST_API_URL } from '../config';
import Utils from '../utils';
import paramsToQueryString from '../utils/paramsToQuerystring'

const getPosts = (params) => {
  return get(POST_API_URL + paramsToQueryString(params))
    .then(data => {
      const result = Utils.normalizePosts(data)

      return {
        loadedAt: new Date().toISOString(),
        persistExpiresAt: 10,
        meta: {
          status: result.length > 0 ? 'success' : 'no_result'
        },
        data: result
      }
    })
    .catch(error => {
      console.log(error)
      return {
        loadedAt: new Date().toISOString(),
        meta: {
          status: 'error',
          message: error
        },
        data: []
      }
    });
}

export default {
  getPosts
}