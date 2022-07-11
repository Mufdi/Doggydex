import axios from "axios"

export const GET_DOGS = "GET_DOGS"
export const GET_BY_NAME = "GET_BY_NAME"


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