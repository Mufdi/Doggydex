import axios from "axios"
import { API } from "../../config"

export const GET_DOGS = "GET_DOGS"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const POST_DOG = "POST_DOG"
export const GET_DETAIL = "GET_DETAIL"
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT"
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
export const SORT_BY_NAME = "SORT_BY_NAME"
export const SORT_BY_WEIGHT = "SORT_BY_WEIGHT"
export const GET_BY_NAME_STATUS = "GET_BY_NAME_STATUS"
export const CLEAR = "CLEAR"


export function getDogs (){
    return function (dispatch){
        return axios(`${API}/dogs`)
        .then(res => {
            dispatch({
                type: GET_DOGS,
                payload: res.data
            })
        }) 
    }
}

export function getDogsByName (name){
    return async function (dispatch){
        try {
            let data = await axios(`${API}/dogs?name=` + name)
            if (data.status === 202){
                return dispatch({
                    type: GET_BY_NAME_STATUS, 
                    payload: data.status
                })
            } else {
                return dispatch({
                    type: GET_BY_NAME, 
                    payload: data.data
                })
            }
            
        } catch (error) {
            console.log("err");
        }
    }
}

export function getTemperaments (){
    return async function (dispatch){
        var json = await axios(`${API}/temperaments`)
        return dispatch ({
            type: GET_TEMPERAMENTS,
            payload: json.data
        })
    }
}

export function postDog (payload){
    console.log(payload);
    return async function (dispatch){
        var json = await axios.post(`${API}/dogs/create`, payload)
        return dispatch ({
            type: POST_DOG,
            payload: json.data
        })
    }
}

export function getDetail (id){
    return async function (dispatch){
        var json = await axios(`${API}/dogs/${id}`)
        if (json.data.id.length === 36){
            json.data.temperament = json.data.temperaments.map(t => t.name).toString().replaceAll(",", ", ")
        }
        console.log(json.data);
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

export function clearState (){
    return {
        type:CLEAR
    }
}







