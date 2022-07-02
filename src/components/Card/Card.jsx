import React from 'react'
import Loading from '../Loading'
import styles from "./Card.module.scss"
import { Link } from "react-router-dom";


const Card = ({ page, results }) => {


    const toShow = results ? results.map((item, i) => {
        const { id, image, name, status, location } = item;
        const contentStatus = status === "Alive" ? styles.contentAlive : status === "Dead" ? styles.contentDead : styles.contentUnknown;

        const statusName = status === "Alive" ? styles.alive : status === "Dead" ? styles.dead : styles.unknown;
        return (
            <Link
                to={`${page}${id}`}
                key={id}
                className={styles.container}
            >
                {<div key={`CardId:${id}, ${i}`} className={`${styles.content} ${contentStatus}`}>
                    <div className={`${statusName}`}>{status}</div>
                    <img src={image} alt="Not Found" className={`${styles.cardimg}`} />
                    <div className={styles.cardname}>{name}</div>
                    <div className={styles.cardinfo}>
                        <div className={styles.cardlocation}>Last Location</div>
                        <div className={styles.locationName}>{location.name}</div>
                    </div>
                </div>}
            </Link>

        );
    }) : <Loading />;

    return toShow
}

export default Card;

