// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ErrorBoundary from '../lib/error-boundary'
import Screen from './screen'

export default () => (
  <View style={styles.container}>
    <ErrorBoundary>
      <Screen />
    </ErrorBoundary>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
