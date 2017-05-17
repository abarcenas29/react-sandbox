import { h, render } from 'preact'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// semantic less
import './semantic/semantic.less'

import {
  Home,
  About,
  Contacts
} from './Routes/Route'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contacts} />
      </div>
    </Router>
  )
}

render(<App />, document.getElementById('app'))
