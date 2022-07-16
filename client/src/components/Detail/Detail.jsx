import React from "react";
import { useEfect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import HomeTitle from "../HomeTitle/HomeTitle";
import styles from "./Detail.module.css"


export default function Detail (props) {
    const dispatch = useDispatch()

    useEfect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])
    
    const selectedDog = useSelector(state => state.details)
    
    return (
        <HomeTitle />,
        selectedDog.length === 0 ?
        <p>Loading...</p> :
        //spinner
        <div className={styles.container}>
            <img 
                className={`${styles.col} ${styles.image}`}
                src={selectedDog.image}
                alt="A pretty dog"
                width="500px"
                height="auto"
            />
            <div className={`${styles.col} ${styles.detail}`}>
                <h1>{selectedDog.name}</h1>
                <h2>{selectedDog.temperament}</h2>
                <h3><strong>Weight: </strong>{selectedDog.weightMin}kg - {selectedDog.weightMax}kg</h3>
                <h3><strong>Height: </strong>{selectedDog.heightMin}cm - {selectedDog.heightMax}cm</h3>
                <h3><strong>Life span: </strong>{selectedDog.life_span}</h3>
                <div className={styles.divButtons}>
                    <Link to={"/dogs"}>
                        <button className={styles.buttons}>Home</button>
                    </Link>
                    <Link to={"/dogs/create"}>
                        <button className={styles.buttons}>Breed-creater</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}