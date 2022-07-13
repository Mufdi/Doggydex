import React from "react";
import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux" 
import { Link } from "react-router-dom"
import { filterByOrigin, filterByTemperament, getDogs, getTemperaments, sortByName, sortByWeight } from "../../redux/actions";
import styles from "./Home.module.css"

export default function Home () {
    const dispatch = useDispatch()
    const allDogs = useSelector(state => state.dogs)
    const allTemperaments = useSelector(state => state.temperaments)

    const [setOrder] = useState("")

    //PAGINADO

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [dispatch])


    function handleClick(e){
        e.preventDefault()
        dispatch(getDogs())
    }

    function handleTempFilter(e){
        e.preventDefault()
        dispatch(filterByTemperament(e.target.value))
    }

    function handleOriginFilter(e){
        e.preventDefault()
        dispatch(filterByOrigin(e.target.value))
    }

    function hanldeNameSort(e){
        e.preventDefault()
        dispatch(sortByName(e.target.value))
        setOrder(`Order ${e.target.value}`)
    }

    function handleWeightSort(e){
        e.preventDefault()
        dispatch(sortByWeight(e.target.value))
        setOrder(`Order ${e.target.value}`)
    }


    
    return (
        <>
            <h1>Text</h1>
        </>
    )
}