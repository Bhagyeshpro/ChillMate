import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebScreen = ({url}) => {
  return (
      <WebView source={{ uri: url }} />
  )
}

export default WebScreen

const styles = StyleSheet.create({})