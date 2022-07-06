import React from "react"
import {Text,View,StyleSheet} from "react-native"

export const NavBar = (props)=> {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Mafddin </Text>
            <Text style={styles.text}>Other Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        alignItems: "center",
        width: "100%"
    },

    text: {
        fontSize: 16,
    }
})