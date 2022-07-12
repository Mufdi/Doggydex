import axios from "axios"

export const GET_DOGS = "GET_DOGS"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const POST_DOG = "POST_DOG"
export const GET_DETAIL = "GET_DETAIL"
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT"
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
export const SORT_BY_NAME = "SORT_BY_NAME"
export const SORT_BY_WEIGHT = "SORT_BY_WEIGHT"


export function getDogs (){
    return async function (dispatch){
        var json = await axios(`http://localhost:3001/dogs`)
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export function getDogsByName (name){
    return async function (dispatch){
        var json = await axios(`http://localhost:3001/dogs?name=${name}`)
        return dispatch ({
            type: GET_BY_NAME,
            payload: json.data
        })
    }
}

export function getTemperaments (){
    return async function (dispatch){
        var json = await axios(`http://localhost:3001/temperaments`)
        return dispatch ({
            type: GET_TEMPERAMENTS,
            payload: json.data
        })
    }
}

export function postDog (payload){
    return async function (dispatch){
        var json = await axios.post(`http://localhost:3001/dog/create`, payload)
        return dispatch ({
            type: POST_DOG,
            payload: json.data
        })
    }
}

export function getDetail (id){
    return async function (dispatch){
        var json = await axios(`http://localhost:3001/dog/${id}`)
        return dispatch ({
            type: GET_DETAIL,
            payload: json.data
        })
    }
}

export function filterByTemperament (payload){
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload
    }
}

export function filterByOrigin (payload){
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
}

export function sortByName (payload){
    return {
        type: SORT_BY_NAME,
        payload
    }
}

export function sortByWeight (payload){
    return {
        type: SORT_BY_WEIGHT,
        payload
    }
}