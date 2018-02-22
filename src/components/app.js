// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ErrorBoundary from '../lib/error-boundary'

type Props = {}
export default () => (
  <View style={styles.container}>
    <ErrorBoundary>
      <ErrorRaiser />
    </ErrorBoundary>
  </View>
)

const ErrorRaiser = () => (
  <Text>{unexist}</Text>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
