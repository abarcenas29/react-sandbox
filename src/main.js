import { h, render } from 'preact'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
    <Router>
      <App>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contacts} />
      </App>
    </Router>
  )
}

render(<Main />, document.getElementById('app'))
