import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import WebScreen from './WebScreen';
// import { AntDesign } from '@expo/vector-icons';


const MainScreen = ({ navigation }) => {
    const [url, setUrl] = useState("MAin");
    const [inputText, setInputText] = useState("None")

    useEffect(() => {
        // const currentUrl = 'https://www.' + inputText + ".com";
        const currentUrl = "https://loader.to/api/button?url=https://youtu.be/BTA1QI-Hs00&f=1080"
            setUrl(currentUrl)
    }, [url, inputText])

    const downloadVideo = (Link, format) => {
        $(".button_container").html(`<iframe style="height:50px; border:none; overflow:hidden;" src="https://loader.to/api/button?url=` + Link + `&f=` + format + `"></iframe>`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            {/* <View style={styles.donwloadButton}>
                <AntDesign
                    name="arrowdown"
                    size={24}
                    color="white"
                // onPress={() => navigation.goBack()}
                />
            </View> */}
            <Text>
                MainScreen
            </Text>
            {/* <View style={styles.headerContainer}>
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color="white"
                    onPress={() => navigation.goBack()}
                />
                <TextInput
                    placeholder='Enter Video Link...'
                    style={styles.textInput}
                    value={inputText}
                    onChangeText={text => setInputText(text)}
                />
                <AntDesign
                    name="download"
                    size={24}
                    color="white"
                    onPress={() => navigation.navigate('Donwloading')}
                />
            </View> */}
            <WebScreen url={url} />
            <View style={styles.donwloadButton}>
                <AntDesign
                    name="arrowdown"
                    size={24}
                    color="white"
                // onPress={() => navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        // justifyContent: "center",
        // marginTop: 20,
        // alignItems: "center",
    },
    headerContainer: {
        alignItems: "center",
        // justifyContent: "center",
        height: 50,
        width: "100%",
        paddingVertical: 5,
        backgroundColor: "#F42E35",
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    textInput: {
        paddingHorizontal: 10,
        width: "70%",
        flex: 1,
        height: 35,
        marginHorizontal: 10,
        backgroundColor: "#E9E9E9",
        // padding: 10,
        // color: "grey",
        borderRadius: 5,
    },
    donwloadButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F42E35",
        zIndex: 5,
        overflow: "hidden",
        width: 45,
        position: "absolute",
        height: 45,
        borderRadius: 30,
        top: 600,
        left: 300,
    }
})