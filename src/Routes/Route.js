import { h } from 'preact' // eslint-disable-line
import Bundle from './Bundle.js'

import loadHome from 'bundle-loader?lazy!./../components/Home' // eslint-disable-line 
import loadAbout from 'bundle-loader?lazy!./../components/About' // eslint-disable-line 
import loadContacts from 'bundle-loader?lazy!./../components/Contacts' // eslint-disable-line 

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
