import { View, Text, Button, StyleSheet } from 'react-native'
import { Link } from "expo-router";
import React from 'react'

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome To Flashcards Learning App</Text>
            <Link href="/Home">
                <View style={styles.ButtonStyle}>
                    <Button title='Continue' color='#008000' />
                </View>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign:"center",
        backgroundColor: '#f9690e',
    },
    text: {
        color: "#FFFFFF",
        fontSize: 50,
        fontWeight: "bold",
        fontStyle: "italic",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    ButtonStyle:{
        fontWeight: "bold",
        height:100,
    }
})

export default Welcome