import React from 'react'
import Gender from "./category/Gender"
import Species from "./category/Species"
import Status from "./category/Status"
import styles from "./Filter.module.scss"

const Filter = ({
  pageNumber, setPageNumber,
  setStatus, setGender,
  setSpecies,
}) => {

  let clear = () => {
    setGender("");
    setSpecies("");
    setStatus("");
    setPageNumber("");
    window.location.reload(false);
  };
  return (
    <div className={styles.filterMainContainer}>
      <div className={styles.filterTittle}>Filters</div>
      <div className={styles.filterClear} onClick={clear}>Clear Filters</div>
      <div className={styles.filterSubContainer} >
        <Status
          setPageNumber={setPageNumber}
          setStatus={setStatus}
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