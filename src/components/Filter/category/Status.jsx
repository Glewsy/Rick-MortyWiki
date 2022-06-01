import FilterBTN from "../FilterBTN";
import styles from "./categorys.modules.scss"



const Status = ({updateStatus, updatePageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className={styles.accordion}>
            <h2 className={styles.accordionText} id="headingOne">
                <button className={styles.accordionBtn} type="button" 
                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne"
                > Status </button>
            </h2>
            <div className={styles.accordionCollapse}
            aria-labelledby="headingOne" data-bs-parent="#accordionExample"
            >
            <div className={styles.accordionBody}>
                {status.map((item,index)=> (
                    <FilterBTN
                    key={index}
                    index={index}
                    name="status"
                    task={updateStatus}
                    updatePageNumber={updatePageNumber}
                    input={item}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Status