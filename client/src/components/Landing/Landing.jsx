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
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}