import React from 'react'
import styles from "./Filter.module.scss"

const FilterBTN = ({ input, task, setPageNumber, index, name }) => {
  return (
    <div className={styles.statusContainer}>
      <div className={styles.form}>
        <input className={styles.input} type="radio"
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