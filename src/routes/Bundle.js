import React, { Component } from 'react'

export default class Bundle extends Component {
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

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    this.setState(
      {
        mod: null
      },
      () => {
        props.load(mod => {
          this.setState({
            mod: mod.default ? mod.default : mod
          })
        })
      }
    )
  }

  render () {
    const { children } = this.props
    const { mod } = this.state
    return children(mod)
  }
}
