import { combineReducers } from 'redux'
import posts from './postsReducer'
import site from './siteReducer'

const rootReducer = combineReducers({
  site,
  posts
})

export default rootReducer;