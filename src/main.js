import { h, render } from 'preact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// semantic less
import './semantic/semantic.less'

import {
  App,
  Home,
  About,
  Contacts
} from './Routes/Route'

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <App>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contacts} />
        </App>
      </Router>
    </Provider>
  )
}

render(<Main />, document.getElementById('app'))
