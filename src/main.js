import React from 'react'
import { render } from 'react-dom'
import * as OfflinePluginRuntime
  from 'offline-plugin/runtime'
import App from './App'
import renderString from 'preact-render-to-string'

// semantic less
import './semantic/semantic.less'

const container = document.getElementById('app')

const init = () => {
  // NODE_ENV
  console.info('NODE_ENV', process.env.NODE_ENV)
  let app = <App />
  let stringRender = renderString(<App />)

  console.log(stringRender)
  render(<App />, container)
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
