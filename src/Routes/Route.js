import { h } from 'preact'
import Bundle from './Bundle.js'

import loadHome from 'bundle-loader?lazy!./../components/Home'
import loadAbout from 'bundle-loader?lazy!./../components/About'
import loadContacts from 'bundle-loader?lazy!./../components/Contacts'

export const Home = () => (
  <Bundle load={loadHome}>
    {Home => {
      return <Home />
    }}
  </Bundle>
)

export const About = () => (
  <Bundle load={loadAbout}>
    {About => <About />}
  </Bundle>
)

export const Contacts = () => (
  <Bundle load={loadContacts}>
    {Contacts => <Contacts />}
  </Bundle>
)
