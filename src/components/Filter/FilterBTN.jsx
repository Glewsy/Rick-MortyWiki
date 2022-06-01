import React from 'react'
import styles from "./Filter.module.scss"

const FilterBTN = ({input, task, updatePageNumber, index, name}) => {
  return (
    <div>
        <div className={styles.form}>
            <input className={styles.input} type="radio" 
            name={name} id={`${name}-${index}`}
             />
             <label onClick={(x)=> {
                 task(input); updatePageNumber(1);
             }}
             className={styles.FilterBTN}
             htmlFor={`${name}-${index}`}
             > {input} </label>
        </div>
    </div>
  )
}

export default FilterBTN