import React from "react";
import { Link } from "react-router-dom"
import styles from "./Landing.module.css"

export default function Landing () {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the DoggyDex!!</h1>
            <Link to="/dogs">
                <button className={styles.button}>HOME</button>
            </Link>
        </div>
    )
}