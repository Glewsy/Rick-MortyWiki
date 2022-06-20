import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Categorys.css";


const Status = ({ updateStatus, setPageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"];
    let [changedClass, setChangedClass] = useState("accordionBody")
    let [changedClassBtn, setChangedClassBtn] = useState("accordionBtn")
    function cambio() {
        changedClass === "accordionBody" ? setChangedClass("accordionBodyShow") : setChangedClass("accordionBody")
        changedClassBtn === "accordionBtn" ? setChangedClassBtn("accordionBtnActive") : setChangedClassBtn("accordionBtn")
    }


    return (
        <div className="accordion">
            <h2 className="accordionText">
                <button className={changedClassBtn} type="button" onClick={cambio}
                > Status </button>
            </h2>
            <div className={changedClass} id="accordionBody">
                {status.map((item, index) => (
                    <FilterBTN
                        key={index}
                        index={index}
                        name="status"
                        task={updateStatus}
                        setPageNumber={setPageNumber}
                        input={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Status