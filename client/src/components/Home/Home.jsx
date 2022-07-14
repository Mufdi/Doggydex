import React from "react";
import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux" 
import { Link } from "react-router-dom"
import { filterByOrigin, filterByTemperament, getDogs, getTemperaments, sortByName, sortByWeight } from "../../redux/actions";
import styles from "./Home.module.css"
import HomeTitle from "../HomeTitle/HomeTitle"
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"


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

    function handleNameSort(e){
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
        //spinner
        <div className={styles.home}>
            <HomeTitle />
            <div className={styles.menuContainer}>
                <div className={styles.menuElement}>
                    <button className={styles.menuButton} onClick={e => handleClick(e)}>
                        Clear filters
                    </button>
                </div>
                <div className={styles.menuElement}>
                    <select onChange={e => handleNameSort(e)}>
                        <option value="withoutFilter" hidden>Sort by name</option>
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                    </select>
                </div>
                <div className={styles.menuElement}>
                    <select onChange={e => handleWeightSort(e)}>
                        <option value="withoutFilter" hidden>Sort by weight</option>
                        <option value="asc">Light weight to heavy</option>
                        <option value="desc">Heavy to light weight</option>
                    </select>
                </div>
                <div className={styles.menuElement}>
                    <select onChange={e => handleTempFilter(e)}>
                        <option key="0" value ="all">Temperaments</option>
                        {
                            allTemperaments?.sort((a, b) => {
                                if (a.name > b.name) return 1
                                if (a.name < b.name) return -1
                                return 0
                            }).map(t => {
                                return (
                                    <option key={t.id} value={t.name}>{t.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className={styles.menuElement}>
                    <select onChange={e => handleOriginFilter(e)}>
                        <option value="all">All breeds</option>
                        <option value="created">Created breeds</option>
                        <option value="api">Existing breeds</option>
                    </select>
                </div>
                <div className={styles.menuElement}>
                    <Link to="/dogs/create">
                        <button className={styles.menuButton}>Breed-creater</button>
                    </Link>
                </div>
                <div className={styles.menuElement}>
                    <SearchBar />
                </div>
            </div>
            {/* paginated */}
            <div className={styles.dogsContainer}>
                {
                    allDogs?.map(d => {
                        return (
                            <Link to={"/dogs/" + d.id}>
                                <Card 
                                    name={d.name}
                                    weightMin={d.weightMin}
                                    weightMax={d.weightMax}
                                    image={d.image}
                                    temperament={d.temperament} 
                                    key={d.id}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}