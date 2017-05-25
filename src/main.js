import { h, render } from 'preact'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import * as OfflinePluginRuntime
  from 'offline-plugin/runtime'
import store from './store'

// semantic less
import './semantic/semantic.less'

import {
  App,
  Home,
  About,
  Contacts,
  NotFound
} from './routes/Route'

const Main = () => {
  // NODE_ENV
  console.info('NODE_ENV', process.env.NODE_ENV)

  return (
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              exact
              path='/about'
              component={About}
            />
            <Route
              exact
              path='/contact'
              component={Contacts}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </App>
      </Router>
    </Provider>
  )
}

render(<Main />, document.getElementById('app'))

/** PWA */
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}
