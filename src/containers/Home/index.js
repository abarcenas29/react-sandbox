import React, { Component } from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

export default class Home extends Component {
  render () {
    return (
      <Grid>
        <Grid.Column width={16}>
          <Header as='h1'>
            This is the header
          </Header>
          <Image src='https://via.placeholder.com/350x150' />
        </Grid.Column>
      </Grid>
    )
  }
}
