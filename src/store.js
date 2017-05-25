import {
  applyMiddleware,
  createStore
} from 'redux'

/**
 * Since this boilerplate is for small-mid projects.
 * Thunk is more appropriate for this case
 */
import thunk from 'redux-thunk'
import reducers from './reducers'

const reduxMiddleware = applyMiddleware(thunk)

export default createStore(
  reducers,
  reduxMiddleware
)
