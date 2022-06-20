import React from 'react'
import Gender from "./category/Gender"
import Species from "./category/Species"
import Status from "./category/Status"
import styles from "./Filter.module.scss"

const Filter = ({
  pageNumber, setPageNumber,
  updateStatus, setGender,
  setSpecies,
}) => {

  let clear = () => {
    setGender("");
    setSpecies("");
    updateStatus("");
    setPageNumber("");
    window.location.reload(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.tittle}>Filters</div>
      <div className={styles.text} onClick={clear}>Clear Filters</div>
      <div className={styles.accordion} id='accordionExample'>
        <Status
          setPageNumber={setPageNumber}
          updateStatus={updateStatus}
        />
        <Species
        setPageNumber={setPageNumber}
        setSpecies={setSpecies}/>
        <Gender
        setPageNumber={setPageNumber}
        setGender={setGender}
        />
      </div>

    </div>
  )
}

export default Filter