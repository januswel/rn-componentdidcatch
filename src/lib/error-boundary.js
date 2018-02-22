// @flow

import * as React from 'react'
import {
  Text,
} from 'react-native'

type Props = {
  children: React.Node,
}
type State = {
  error?: Error,
  info?: string,
}
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidCatch(error: Error, info: string) {
    this.setState({
      error,
      info,
    })
  }

  render() {
    if (this.state.error) {
      console.log(this.state.error)
      console.log(this.state.info)
      return <Text>{this.state.error.message}</Text>
    }

    return this.props.children
  }
}
