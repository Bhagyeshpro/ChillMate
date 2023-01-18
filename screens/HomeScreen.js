import { Button, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {
    const [url, setUrl] = useState("MAin");
    const [inputText, setInputText] = useState("None")

    useEffect(() => {
        // const currentUrl = 'https://www.' + inputText + ".com";
        const currentUrl = "https://loader.to/api/button?url=https://youtu.be/BTA1QI-Hs00&f=1080"
        setUrl(currentUrl)
    }, [url, inputText])

    // const downloadVideo = (Link, format) => {
    //     $(".button_container").html(`<iframe style="height:50px; border:none; overflow:hidden;" src="https://loader.to/api/button?url=` + Link + `&f=` + format + `"></iframe>`);
    // }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.headerContainer}>
                <Text style={styles.text} >ChillMate</Text>
            </View>

            <View style={styles.middleScreen}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Web")}>
                    <Text style={styles.buttonText}>Youtube</Text>
                </Pressable>
                {/* Download Button */}
                <Pressable style={styles.button} onPress={() => alert("Downloading...")}>
                    <Text style={styles.buttonText}>Donwloading</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        // justifyContent: "center",
        // marginTop: 20,
        // alignItems: "center",
    },
    text: {
        color: "#E9E9E9",
        fontSize: 35,
    },
    middleScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        // marginVertical: 50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        width: "50%",
        elevation: 3,
        marginVertical: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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
    },


})