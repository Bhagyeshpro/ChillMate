import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const WebScreen = () => {
    return (
        <WebView source={{ uri: 'https://www.youtube.com/' }} style={{ marginTop: 20, backgroundColor: "#000" }} />
    );
}

export default WebScreen

const styles = StyleSheet.create({})