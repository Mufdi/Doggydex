import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getDogsByName } from "../../redux/actions"
import styles from "./SearchBar.module.css"

export default function SearchBar ({ setCurrentPage }) {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleSearchChange (e){
        // e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit (e){
        e.preventDefault()
        setCurrentPage(1)
        dispatch(getDogsByName(name))
        setName("")
    }

    
    
    return (
        <form className={styles.container}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.input}
                    type="text"
                    placeholder="Search a dog..."
                    onChange={e => handleSearchChange(e)}
                    value={name}
                />
                <button 
                    className={styles.button}
                    type="submit"
                    onClick={e => handleSubmit(e)}>
                </button>
            </div>
        </form>
    )
}