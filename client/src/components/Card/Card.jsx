import React from "react";
import styles from "./Card.module.css"

export default function Card ({ name, weightMin, weightMax, image, temperament }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>{name}</h1>
            <h3 className={styles.info}>
                {
                    function (temperament) {
                        if (typeof (temperament) === 'string'){
                            return temperament
                        }
                        if (Array.isArray(temperament)){
                            let tempArray = temperament.map(t => t.name)
                            return tempArray.join(', ')
                        }
                    }(temperament)
                }
            </h3>
            <h3 className={styles.info}>Weight: {weightMin} - {weightMax}</h3>
            <img className={styles.image} src={image} alt={`${name}`} />
        </div>
    )
}