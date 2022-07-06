import {React,useEffect} from "react";
import {StyleSheet,ScrollView} from "react-native"
import {useDispatch,useSelector} from "react-redux"
import { loadPhotos } from "../store/actions/actions";
import { ImageCard } from "../components/ImageCard";
import {Error} from "../components/Error"


export const MainScreen = ({navigation})=>{

const onNavigatePhotos = (photoUrl)=>{
    navigation.navigate("Photo", photoUrl)
}

const dispatch = useDispatch()
const {photos,error} = useSelector(state=>state)


useEffect(()=>{
   dispatch(loadPhotos())
},[])

    if(error) {
        return <Error/>
    }

    return ( 
 
        <ScrollView contentContainerStyle = {styles.container}>   
        { 
            photos.map(el=>{

                return <ImageCard
                            key={el.id}
                            onNavigatePhotos={onNavigatePhotos}
                            description={el.description}
                            name={el.user.first_name} 
                            image={el.urls.full}>
                        </ImageCard>
                })
        }
        </ScrollView> 
    
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 1000,
        paddingTop: 50,
    }    
});