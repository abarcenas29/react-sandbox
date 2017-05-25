import { h, Component } from 'preact'
import { connect } from 'react-redux'

import { defaultAction } from './actions'

import { Grid } from 'semantic-ui-react'

class App extends Component {
  componentWillMount () {
    this.props.default({ text: 'I am launched' })
  }

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

const mapStateToProps = store => {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    default: payload =>
      dispatch(defaultAction(payload)),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
