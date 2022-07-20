import React from "react";
import styles from "./NotFound.module.css"

export default function NotFound () {
    return (
        <div className={styles.container1}>
            <div className={styles.container2}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Dog not found</h1>
                    <br /> <br />
                    <img 
                        // src= "https://tenor.com/view/perro-feliz-thank-you-dogs-gif-9133996.gif"
                        src= "https://c.tenor.com/jbc_BCJe_5MAAAAC/dogs.gif"
                        alt= "Sorry, any dog is here"
                    />
                </div>
            </div>
        </div>
    )
}