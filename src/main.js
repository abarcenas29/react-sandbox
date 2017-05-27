import { h, render } from 'preact'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import * as OfflinePluginRuntime
  from 'offline-plugin/runtime'
import store, { history } from './store'
import Routes from './routes'

// semantic less
import './semantic/semantic.less'

const Main = () => {
  // NODE_ENV
  console.info('NODE_ENV', process.env.NODE_ENV)

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  )
}

render(<Main />, document.getElementById('app'))

/** PWA */
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}
