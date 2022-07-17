import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Create.module.css"
import { postDog, getTemperaments } from "../../redux/actions";


function validation (input){
    let errors = {}
    if (!input.name){
        errors.name = "You must write a name"
        // return errors
    } else if (input.name.length > 20){
        errors.name = "The name is too long"
        // return errors
    } else {
        errors.name = ""
    }
    if (!input.heightMin){
        errors.heightMin = "You must set the heigth"
        // return errors
    } else if (isNaN(input.heightMin)){
        errors.heightMin = "You must write a number"
        // return errors
    } else if (input.heightMin <= 2){
        errors.heightMin = "The breed can't be that small"
        // return errors
    } else if (input.heightMin >= input.heightMax){
        errors.heightMin = "Min height cannot be greater or equal than the max height"
        // return errors
    } else {
        errors.heightMin = ""
    }
    if (isNaN(input.heightMax)){
        errors.heightMax = "You must write a number"
        // return errors
    } else if (input.heightMax >= 201){
        errors.heightMax = "The breed can't be that tall"
        // return errors
    } else if (input.heightMax <= input.heightMin){
        errors.heightMax = "Max height cannot be less than or equal to min height"
        // return errors
    } else {
        input.heightMax = ""
    }
    if (!input.weightMin){
        errors.weightMin = "You must set a weight"
        // return errors
    } else if (isNaN(input.weightMin)){
        errors.weightMin = "You must write a number"
        // return errors
    } else if (input.weightMin <= 0){
        errors.weightMin = "The breed can't be that light"
        // return errors
    } else if (input.weightMin >= input.weightMax){
        errors.weightMin = "Min weight cannot be greater or equal than the max weight"
        // return errors
    } else {
        errors.weightMin = ""
    }
    if (isNaN(input.weightMax)){
        errors.heightMax = "You must write a number"
        // return errors
    } else if (input.weightMax >= 200){
        errors.weightMax = "The breed can't be that heavy"
        // return errors
    } else if (input.weightMax <= input.weightMin){
        errors.weightMax = "Max weight cannot be less than or equal to min weight"
        // return errors
    } else {
        errors.weightMax = ""
    }
    if (isNaN(input.life_span)){
        errors.life_span = "You must write a number"
        // return errors
    } else if (input.life_span <= 0){
        errors.life_span = "The life span can't be less than 1 year"
        // return errors
    } else if (input.life_span >= 50){
        errors.life_span = "Unfortunately your breed cannot be so long-lived"
        // return errors
    }
    return errors
}



export default function Create () {

    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_span: "",
        image: "",
        temperaments: []
    }) 


    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
    }

    function handleDelete(e){
        setInput({
            ...input,
            temperaments: input.temperaments.filter(t => t !== e)
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if (
            !errors.name &&
            !errors.heightMin &&
            !errors.heightMax &&
            !errors.weightMin &&
            !errors.weightMax &&
            !errors.life_span &&
            input.name &&
            input.heightMin &&
            input.weightMin
        ){
            alert("Your breed has created successfully!")
            dispatch(postDog(input))
            setInput({
                name: "",
                heightMin: "",
                heightMax: "",
                weightMin: "",
                weightMax: "",
                life_span: "",
                image: "",
                temperaments: []
            })
        } else {
            alert("Missing info to create the breed")
        }
    }


    
    return (
        <div>
            <h1>Create your own breed!</h1>
            <form className={styles.form} onSubmit={e => handleSubmit(e)}>
                <div>
                    <label><strong>Name: </strong></label>
                    <input
                        className={styles.input}
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={e => handleChange(e)}
                    />
                    {
                        errors.name && <p className={styles.errors}><strong>{errors.name}</strong></p>
                    }
                </div>
                <div>
                    <label><strong>Min Height: </strong></label>
                    <input
                        className={styles.input}
                        type="number"
                        value={input.heightMin}
                        name="heightMin"
                        onChange={e => handleChange(e)}
                    />
                    <label>cm</label>
                    {
                        errors.heightMin && <p className={styles.errors}><strong>{errors.heightMin}</strong></p>
                    }
                </div>
                <div>
                    <label><strong>Max Height: </strong></label>
                    <input
                        className={styles.input}
                        type="number"
                        value={input.heightMax}
                        name="heightMax"
                        onChange={e => handleChange(e)}
                    />
                    <label>cm</label>
                    {
                        errors.heightMax && <p className={styles.errors}><strong>{errors.heightMax}</strong></p>
                    }
                </div>
                <div>
                    <label><strong>Min Weight: </strong></label>
                    <input
                        className={styles.input}
                        type="number"
                        value={input.weightMin}
                        name="weightMin"
                        onChange={e => handleChange(e)}
                    />
                    <label>kg</label>
                    {
                        errors.weightMin && <p className={styles.errors}><strong>{errors.weightMin}</strong></p>
                    }
                </div>
                <div>
                    <label><strong>Max Weight: </strong></label>
                    <input
                        className={styles.input}
                        type="number"
                        value={input.weightMax}
                        name="weightMax"
                        onChange={e => handleChange(e)}
                    />
                    <label>kg</label>
                    {
                        errors.weightMax && <p className={styles.errors}><strong>{errors.weightMax}</strong></p>
                    }
                </div>
                <div>
                    <label><strong>Life Span: </strong></label>
                    <input
                        className={styles.input}
                        type="number"
                        value={input.life_span}
                        name="life_span"
                        onChange={e => handleChange(e)}
                    />
                    <label>years</label>
                    {
                        errors.life_span && <p className={styles.errors}><strong>{errors.life_span}</strong></p>
                    }
                </div>
                <div>
                    <label><strong>Image: </strong></label>
                    <input
                        className={styles.input}
                        type="url"
                        value={input.image}
                        name="image"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label><strong>Temperaments: </strong></label>
                    <select
                        className={styles.input} 
                        onChange={e =>handleSelect(e)}
                    >
                        <option value="selected" hidden>Choose</option>
                        {
                            temperaments?.sort((a, b) => {
                                if (a.name > b.name) return 1
                                if (a.name < b.name) return -1
                                return 0
                            }).map(t => {
                                return (
                                    <option value={t.name} key={t.id}>{t.name}</option>
                                )
                            })
                        }
                    </select>
                    {
                        input.temperaments.map(t => (
                            <div className={styles.deleted} key={t}>
                                <p>{t}</p>
                                <button onClick={() => handleDelete(t)}>x</button>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.buttonsContainer}>
                    <Link to="/dogs" >
                        <button className={styles.buttons}>Cancel</button>
                    </Link>
                    <button className={styles.buttons} type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}