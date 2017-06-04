import React from 'react'
import Bundle from './Bundle.js'

/* eslint-disable */
import loadApp from 'bundle-loader?lazy!./../containers/App'
import loadHome
  from 'bundle-loader?lazy!./../containers/Home'
import loadAbout
  from 'bundle-loader?lazy!./../containers/About'
import loadContacts
  from 'bundle-loader?lazy!./../containers/Contacts'
import loadNotMatch
  from 'bundle-loader?lazy!./../containers/NotFound'
/* eslint-enable */

export const App = ({ children }) => (
  <Bundle load={loadApp}>
    {App => {
      return (
        <div>
          {App
            ? <App children={children} />
            : <p>Loading</p>}
        </div>
      )
    }}
  </Bundle>
)

export const Home = () => (
  <Bundle load={loadHome}>
    {Home => {
      return (
        <div>
          {Home ? <Home /> : <p>Loading</p>}
        </div>
      )
    }}
  </Bundle>
)

export const About = () => (
  <Bundle load={loadAbout}>
    {About => (
      <div>
        {About ? <About /> : <p>Loading</p>}
      </div>
    )}
  </Bundle>
)

export const Contacts = () => (
  <Bundle load={loadContacts}>
    {Contacts => (
      <div>
        {Contacts ? <Contacts /> : <p>Loading</p>}
      </div>
    )}
  </Bundle>
)

export const NotFound = () => (
  <Bundle load={loadNotMatch}>
    {NotMatch => (
      <div>
        {NotMatch ? <NotMatch /> : <p>Loading</p>}
      </div>
    )}
  </Bundle>
)

/* BUNDLE GENERATOR */
