import React from "react"
import {Text, Image, StyleSheet} from "react-native"

export const Error = ()=>{
    return (
        <View>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAXCw6k1joCtqZbK-KKsFGl3Jtn-fvqQMGg&usqp=CAU"}}/>
            <Text>Something went wrong</Text>
        </View>
    )
}

