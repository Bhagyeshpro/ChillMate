import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebComponent = ({url}) => {
  return (
      <WebView source={{ uri: url }} />
  )
}

export default WebComponent

const styles = StyleSheet.create({})