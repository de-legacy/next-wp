import axios, { get } from "axios";
import { POST_API_URL } from '../config';
import Utils from '../utils';

const getPosts = () => {
  return axios.get(POST_API_URL)
    .then(data => {
      const result = Utils.normalizePosts(data)

      return {
        meta: {
          status: result.length > 0 ? 'success' : 'no_result'
        },
        data: result
      }
    })
    .catch(error => {
      return {
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