import { h, Component } from 'preact'

class Bundle extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mod: null
    }

    this.load = this.load.bind(this)
  }

  componentWillMount () {
    this.load(this.props)
  }

  componentWillRecieveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    this.setState({
      mod: null
    }, () => {
      props.load(mod => {
        this.setState({
          mod: mod.default ? mod.default : mod
        })
      })
    })
  }

  render ({children}, { mod }) {
    return children[0](this.state.mod)
  }
}

export default Bundle
