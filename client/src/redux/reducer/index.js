import { 
    GET_DOGS,
    GET_BY_NAME,
    GET_TEMPERAMENTS,
    POST_DOG,
    GET_DETAIL,
    FILTER_BY_TEMPERAMENT,
    FILTER_BY_ORIGIN,
    SORT_BY_NAME,
    SORT_BY_WEIGHT 
} 
from "../actions"

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    details: []
}

export default function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case POST_DOG:
            return {
                ...state,
                allDogs: [...state.allDogs, action.payload]
            }
        case GET_DETAIL:
            return {
                ...state,
                details: action.payload
            }
        case FILTER_BY_TEMPERAMENT:
            return {
                
            }
        case FILTER_BY_ORIGIN:
            return {

            }
        case SORT_BY_NAME:
            return {

            }
        case SORT_BY_WEIGHT:
            return {

            }

        default:
            return state
    }
}