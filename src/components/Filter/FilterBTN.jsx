import React from 'react'
import styles from "./Filter.module.scss"

const FilterBTN = ({ input, task, setPageNumber, index, name }) => {
  return (
    <div className={styles.filterBtnContainer}>
      <div className={styles.filterBtnForm}>
        <input className={styles.filterBtnInput} type="radio"
          name={name} id={`${name}-${index}`}
        />
        <label onClick={(x) => {
          task(input)
          setPageNumber(1);
        }}
          className={styles.FilterBTN}
          htmlFor={`${name}-${index}`}
        > {input} </label>
      </div>
    </div>
  )
}

export default FilterBTN