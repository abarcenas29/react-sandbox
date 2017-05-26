import { h, render } from 'preact'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as OfflinePluginRuntime
  from 'offline-plugin/runtime'
import store from './store'
import Routes from './routes'

// semantic less
import './semantic/semantic.less'

const Main = () => {
  // NODE_ENV
  console.info('NODE_ENV', process.env.NODE_ENV)

  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

render(<Main />, document.getElementById('app'))

/** PWA */
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}
