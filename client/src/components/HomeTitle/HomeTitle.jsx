import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./HomeTitle.module.css"

export default function HomeTitle (){
    return (
        <div className={styles.title}>
            <Link exact to="/dogs"> The DoggyDex </Link>
        </div>
    )
}