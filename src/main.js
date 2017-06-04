import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import * as OfflinePluginRuntime
  from 'offline-plugin/runtime'
import App from './App'

// semantic less
import './semantic/semantic.less'

const container = document.getElementById('app')

const init = () => {
  // NODE_ENV
  console.info('NODE_ENV', process.env.NODE_ENV)
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    container
  )
}

init()

/** PWA */
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}

if (module.hot) {
  module.hot.accept()
  module.hot.accept('./App', () => init())
}
