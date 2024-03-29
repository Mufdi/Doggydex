import React from "react";
import styles from "./Pagination.module.css"

export default function Pagination ({ dogsPerPage, allDogs, paginated }) {
    const pagesNumbers = []
    if (allDogs.length === 0){
        pagesNumbers.push(1)
    }else{ 
    for (let i = 0; i < Math.ceil(allDogs/dogsPerPage); i++) {
        pagesNumbers.push(i + 1) 
    }
}

    return (
        <nav className={styles.navPag}>
            <ul className={styles.paginated}>
                {
                    pagesNumbers < 1 ? <h1> </h1> :
                    pagesNumbers.length && pagesNumbers.map(n => (
                        <li className={styles.liPag} key={n}>
                            <button className={styles.paginatedLinks} onClick={() => paginated(n)}><strong>{n}</strong></button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}