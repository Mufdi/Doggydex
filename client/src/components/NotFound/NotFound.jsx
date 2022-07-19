import React from "react";
import styles from "./NotFound.module.css"

export default function NotFound () {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dog not found</h1>
            <br /> <br />
            <img 
                src= "https://tenor.com/view/perro-feliz-thank-you-dogs-gif-9133996.gif"
                alt= "Sorry, any dog is here"
            />
        </div>
    )
}