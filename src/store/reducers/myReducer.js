import { PHOTOS_ERROR, PHOTOS_LOADED } from "../types/types";


const initialState = {
    photos: [],
    error: null,
}

export const myReducer = (state=initialState, action)=>{
    switch (action.type) {
        case PHOTOS_LOADED:
            return {
                ...state,
                photos: [...photos,action.payload],
                error: "rrr",
                smile:true,
            };
        case PHOTOS_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case "PHOTO":
            return{
                ...state,
                photos: action.payload,
                err: true,
            }    
        default:
            return state
    }
}