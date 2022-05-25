import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"


const Pagination = ({ pageNumber, info, updatePageNumber }) => {

    let pageChange = (data) => {
        updatePageNumber(data.selected + 1);
    }
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions)
    }, []);

    return (
        <>
            <style jsx>
                {`
          a {
              color: white; text-decoration:none;
          }
          @media (max-width: 768px){
              .pagination {font-size: 12px}
              .next,
              .prev {display: none}
          }
          @media (max-width:768px){
              .pagination {font-size: 14px}
          }
          `}
            </style>
            <ReactPaginate
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                pageCount={info?.pages}
                onPageChange={pageChange}
                className={styles.pagination}
                nextLabel="Next"
                previousLabel="Prev"
                previousClassName={styles.btn}
                nextClassName={styles.btn}
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName='page-link'
            />
        </>
    )
}

export default Pagination