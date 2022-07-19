import React from "react";
import { Link } from "react-router-dom"
import styles from "./Landing.module.css"

export default function Landing () {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Welcome to the DoggyDex!!</h1>
                    <div className={styles.cont}>
                        <Link to="/dogs">
                            <button>
                                <p>Home</p>
                                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}