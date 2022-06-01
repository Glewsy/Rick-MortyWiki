import React from 'react'
import styles from "./Card.module.scss"


const Card = ({ results }) => {
    let display;


    if (results) {
        display = results.map((c) => {
            let { id, image, name, status, location } = c;
            return (
                <>
                    {
                        (() => {
                            if (status === "Dead") {
                                return (
                                    <><div key={id} className={`${styles.content} ${styles.contentdead}`} >
                                        <div className={`${styles.dead}`}>{status}</div>

                                        <img src={image} alt="Not Found" className={`${styles.cardimg}`} />
                                        <div className={styles.cardname}>{name}</div>
                                        <div className={styles.cardinfo}>
                                            <div className={styles.cardlocation}>Last Location</div>
                                            <div className={styles.locationName}>{location.name}</div>
                                        </div>

                                    </div></>

                                );
                            } else if (status === "Alive") {
                                return (
                                    <><div key={id+9000} className={`${styles.content} ${styles.contentalive}`} >
                                        <div className={`${styles.alive}`}>{status}</div>

                                        <img src={image} alt="Not Found" className={`${styles.cardimg}`} />
                                        <div className={styles.cardname}>{name}</div>
                                        <div className={styles.cardinfo}>
                                            <div className={styles.cardlocation}>Last Location</div>
                                            <div className={styles.locationName}>{location.name}</div>
                                        </div>

                                    </div></>
                                );
                            } else {
                                return (
                                    <><div key={id+1000} className={`${styles.content} ${styles.contentunknown}`} >
                                        <div className={`${styles.unknown}`}>{status}</div>

                                        <img src={image} alt="Not Found" className={`${styles.cardimg}`} />
                                        <div className={styles.cardname}>{name}</div>
                                        <div className={styles.cardinfo}>
                                            <div className={styles.cardlocation}>Last Location</div>
                                            <div className={styles.locationName}>{location.name}</div>
                                        </div>

                                    </div></>
                                );
                            }
                        })()
                    }
                </>

            )
        })
    }
    else {
        display = "No Characters Found :/"
    }
    return (
        <>{display}</>
    )
}

export default Card