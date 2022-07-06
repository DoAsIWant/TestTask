import { PHOTOS_ERROR, PHOTOS_LOADED } from "../types/types";

const initialState = {
  photos: [],
  error: null,
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTOS_LOADED:
      return {
        ...state,
        photos: action.payload,
      };
    case PHOTOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
