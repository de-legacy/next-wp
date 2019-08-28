export default function paramsToQueryString(params) {
  const paramsLength = Object.keys(params).length;
  let queryString = '';
  let index = 0;

  if (paramsLength > 0) {
    for (var param in params) {
      queryString += `${index === 0 ? '?' : '&'}`;
      queryString += params[param] !== null ? `${param}=${params[param]}` : `${param}`;
      index++;
    }
  }

  return queryString;
}