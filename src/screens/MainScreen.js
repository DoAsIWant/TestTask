import {React,useEffect} from "react";
import {StyleSheet,ScrollView} from "react-native"
import {useDispatch,useSelector} from "react-redux"
import { loadPhotos } from "../store/actions/actions";
import { ImageCard } from "../components/ImageCard";
import { connect } from 'react-redux';


export const MainScreen = ({navigation})=>{

const onNavigatePhotos = (image)=>{
    navigation.navigate("Photo", image)
}

const dispatch = useDispatch()
const allphotos = useSelector(state=>{ console.log(state) 
    return state.photos})
const error = useSelector(state=>state.error)

useEffect(()=>{
   dispatch(loadPhotos())
},[])

    if(error) {
        return <Error></Error>
    }

    return ( 
 
        <ScrollView styles={styles.container}>   
        { 
            allphotos.map(el=>{

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
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        paddingTop: 100,
    }    
});