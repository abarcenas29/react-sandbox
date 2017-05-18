import { h, Component } from 'preact'
import {
  Grid
} from 'semantic-ui-react'

class App extends Component {
  render () {
    return (
      <Grid>
        <Grid.Column width={16}>
          This is the navigation area
        </Grid.Column>
        <Grid.Column width={16}>
          {this.props.children}
        </Grid.Column>
        <Grid.Column width={16}>
          This is the footer
        </Grid.Column>
      </Grid>
    )
  }
}

export default App
