import { applyMiddleware, createStore } from 'redux'

// 3rd party reducers
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)

/**
 * Since this boilerplate is for small-mid projects.
 * Thunk is more appropriate for this case
 */
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleWears = [routeMiddleware, thunk, logger]

const reduxMiddleware = applyMiddleware(...middleWears)

export { history }
export default createStore(reducers, reduxMiddleware)
