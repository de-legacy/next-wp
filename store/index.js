import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import expireReducer from 'redux-persist-expire';

const persistConfig = {
  transforms: [
    expireReducer('posts', {
      persistedAtKey: 'loadedAt',
      expireSeconds: 10,
      expiredState: {},
    })
  ],
  key: 'root',
  storage,
  whitelist: ['site', 'posts'] // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const initializeStore = (initialState = { posts: { meta: { status: 'loading' }, data: [] }, site: {} }) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )
}

export default initializeStore;