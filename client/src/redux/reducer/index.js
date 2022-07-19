import { 
    GET_DOGS,
    GET_BY_NAME,
    GET_TEMPERAMENTS,
    POST_DOG,
    GET_DETAIL,
    FILTER_BY_TEMPERAMENT,
    FILTER_BY_ORIGIN,
    SORT_BY_NAME,
    SORT_BY_WEIGHT,
    GET_BY_NAME_STATUS 
} 
from "../actions"

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    details: [],
    status: []
}

export default function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
                status: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                dogs: action.payload,
                status: action.payload
            }
        case GET_BY_NAME_STATUS:
            return {
                ...state,
                status: action.payload,
                dogs: []
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
            const allDogs = state.allDogs
            const temperamentFilter = action.payload === "all" ? allDogs : allDogs.filter(t => {
                if (typeof(t.temperament) === "string"){
                    return t.temperament.includes(action.payload)
                } else if (Array.isArray(t.temperaments)){
                    let temperamentArray = t.temperaments.map(t => t.name)
                    return temperamentArray.includes(action.payload)
                }
                return true
            })
            return {
                ...state,
                dogs: temperamentFilter
            }
        case FILTER_BY_ORIGIN:
            const allDogsOrigin = state.allDogs
            const originFilter = action.payload === "all" ? allDogsOrigin : action.payload === "created" ? allDogsOrigin.filter(d => d.created) : allDogsOrigin.filter(d => !d.created)
            return {
                ...state,
                dogs: originFilter
            }
        case SORT_BY_NAME:
            const sortedAbc = action.payload === "asc" ? 
            state.dogs.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                return 0
            }) :
            state.dogs.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                return 0
            })
            return {
                ...state,
                dogs: sortedAbc
            }
        case SORT_BY_WEIGHT:
            const sortedWeight = action.payload === "asc" ?
            state.dogs.sort ((a, b) => {
                return a.weightMin - b.weightMin
            }) :
            state.dogs.sort((a, b) => {
                return b.weightMax - a.weightMax
            })
            return {
                ...state,
                dogs: sortedWeight
            }

        default:
            return state
    }
}