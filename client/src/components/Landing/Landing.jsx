import React from "react";
import { Link } from "react-router-dom"
import styles from "./Landing.module.css"

export default function Landing () {
    return (
        <div className={styles.contLanding}>
            <div className={styles.containerLanding}>
                <div className={styles.textLanding}>
                    <h1 className={styles.titleLand}>Welcome to the DoggyDex!!</h1>
                    <div className={styles.cont}>
                        <Link to="/dogs">
                            <button className={styles.buttonLand}>
                                <p>Home</p>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}