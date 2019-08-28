import { get } from 'axios'
import { SITE_INFO_URL } from '../config';

const getSiteInfo = () => {
  return get(SITE_INFO_URL)
    .then(response => {
      const { name, url, home, gmt_offset, timezone_string, description} = response.data;
      const results = {
        name: name,
        description: description,
        url: url,
        home: home,
        gmt_offset: gmt_offset,
        timezone_string: timezone_string
      }
      
      return {
        meta: {
          status: Object.keys(results).length > 0 ? 'success' : 'no_results'
        },
        data: results
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
    })
}

export default {
  getSiteInfo
}