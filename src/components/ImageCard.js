import React from "react";
import {View,Text,StyleSheet,Image, Pressable} from "react-native";

export const ImageCard = (props)=>{
    const {description, name, image,onNavigatePhotos} = props
    return(
       <View styles={styles.card}>
            <Text style={styles.text}>{name}ffffrr</Text>
            <Pressable onPress={()=>onNavigatePhotos(image)}>
                 <Image  style={styles.image} source={{uri:image}}></Image>
            </Pressable>
            <Text style={styles.text}>{description}</Text>
       </View> 
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },

    text: {
        fontSize: 15,
    },

    image: {
        width: "100%",
        paddingBottom:20,
        paddingTop: 20,
        height: 200,
    }
})