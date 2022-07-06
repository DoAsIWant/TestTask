import axios from "axios"
import { PHOTOS_ERROR, PHOTOS_LOADED } from "../types/types"

export const loadPhotos = ()=> {
    console.log("Loading")
    return dispatch => {
        axios.get("https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9")
        .then(data=>{
            dispatch(photoLoaded(data.data))
        })
        .catch(err=>{
            dispatch(photoError(err.message))
        })
    }
}

 const photoLoaded = (newPhotos) =>({ 
    type: PHOTOS_LOADED,
    payload: {...newPhotos}
})


const photoError = (err)=>{
    return {
        type: PHOTOS_ERROR,
        payload: {err}
    }
}

