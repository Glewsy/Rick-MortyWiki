import React from 'react'
import Gender from "./category/Gender"
import Species from "./category/Species"
import Status from "./category/Status"
import styles from "./Filter.module.scss"

const Filter = ({
    pageNumber, updatePageNumber,
    updateStatus, updateGender,
    updateSpecies,
  }) => {

    let clear = ()=> {
        updateGender("");
        updateSpecies("");
        updateStatus("");
        updatePageNumber("");
        window.location.reload(false);
    };
  return (
    <div className={styles.container}>
        <div className={styles.tittle}>Filters</div>
        <div className={styles.text} onClick={clear}>Clear Filters</div>
        <div className={styles.accordion} id='accordionExample'>

        </div>
    </div>
  )
}

export default Filter