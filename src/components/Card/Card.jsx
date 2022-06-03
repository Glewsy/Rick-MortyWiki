import React from 'react'
import Loading from '../Loading'
import styles from "./Card.module.scss"


const Card = ({ results }) => {

    const toShow = results ? results.map((item, i) => {
        const { id, image, name, status, location } = item;
        const contentStatus = status === "Alive" ? styles.contentAlive : status === "Dead" ? styles.contentDead : styles.contentUnknown;
        // const contentStatus = function (status) { if (status === "Alive") { return styles.contentalive } else if (status === "Dead") { return styles.contentdead } else { return styles.contentunknown } };
        const statusName = status === "Alive" ? styles.alive : status === "Dead" ? styles.dead : styles.unknown;
        // const Status = function (status) { if (status === "Alive") { return styles.alive } else if (status === "Dead") { return styles.dead } else { return styles.unknown } };
        return (
            <div key={`CardId:${id}, ${i}`} className={`${styles.content} ${contentStatus}`}>
                <div className={`${statusName}`}>{status}</div>
                <img src={image} alt="Not Found" className={`${styles.cardimg}`} />
                <div className={styles.cardname}>{name}</div>
                <div className={styles.cardinfo}>
                    <div className={styles.cardlocation}>Last Location</div>
                    <div className={styles.locationName}>{location.name}</div>
                </div>
            </div>
        );
    }) : <Loading />;

    return toShow
}

export default Card;


