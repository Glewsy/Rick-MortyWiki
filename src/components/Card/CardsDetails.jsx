import React, {useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import styles from "./Card.module.scss"


const CardDetails = () =>{
    let {id} = useParams();
    let [fetchedData, setFetchedData] = useState([]);
    let {name, location, origin, gender, image, status, species} = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`;



    useEffect(()=>{
        (async function () {
            let data = await fetch(api).then((res)=>res.json());
            setFetchedData(data)

        })();
    },[api])

    const contentStatus = status === "Alive" ? styles.contentAlive : status === "Dead" ? styles.contentDead : styles.contentUnknown;

    const statusName = status === "Alive" ? styles.alivef : status === "Dead" ? styles.deadf : styles.unknownf;

    return (
        <div className={styles.container}>
                <h1 className={styles.cardnamef}>{name}</h1>
            <div className={`${styles.content} ${contentStatus}`}>
                <img className={`${styles.cardimg}`} src={image} alt="No se a podido cargar la imagen" />
                <div className={styles.cardinfo}>
                <div className={`${statusName}`}>{status}</div>
                    <div><p className={styles.species}>Specie</p>: {species}</div>
                    <div><p className={styles.gender}>Gender</p>: {gender}</div>
                    <div><p className={styles.origin}>Origin</p>: {origin?.name}</div>
                    <div><p className={styles.location}>Last Location</p>: {location?.name}</div>
                </div>

            </div>
        </div>
    )
}



export default CardDetails