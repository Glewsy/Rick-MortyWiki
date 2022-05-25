import React from 'react'
import styles from "./Search.module.scss"

const Search = ({setSearch, updatePageNumber }) => {
    let searchBtn = (e)=>{
        e.preventDefault();
    };
    return (
        <form className={`${styles.search}`}>
            <input onChange={(e)=> {
                updatePageNumber(1);
                setSearch(e.target.value);
            }}
            placeholder="Search for characters"
            className={styles.input}
            type="text" />
            <button
            onClick={searchBtn}
            className={`${styles.btn}`}
            >Search</button>
        </form>
    )
};

export default Search