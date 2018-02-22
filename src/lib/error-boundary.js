// @flow

import React from 'react'
import {
  Text,
} from 'react-native'

type Props = {}
export default class ErrorBoundary extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      info: null,
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    })
  }

  render() {
    if (this.state.hasError) {
      console.log(this.state.error)
      console.log(this.state.info)
      return <Text>Error</Text>
    }

    return this.props.children
  }
}
