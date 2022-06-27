import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Categorys.css";


const Status = ({ setStatus, setPageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"];
    let [changedClass, setChangedClass] = useState("accordion-body-off")
    let [changedClassBtn, setChangedClassBtn] = useState("button-off")
    let [arrowDirection, setArrowDirection] = useState("arrowOff")
    function cambio() {
        changedClass === "accordion-body-off" ? setChangedClass("accordion-body-on") : setChangedClass("accordion-body-off")
        changedClassBtn === "button-off" ? setChangedClassBtn("button-on") : setChangedClassBtn("button-off")
        arrowDirection === "arrowOff" ? setArrowDirection("arrowOn") : setArrowDirection("arrowOff")
    }


    return (
        <div className="accordion-container">
            <h2 className="accordion-buttton">
                <button className={changedClassBtn} type="button" onClick={cambio}
                > Status <div className={arrowDirection}></div> </button>
            </h2>
            <div className={changedClass}>
                {status.map((item, index) => (
                    <FilterBTN
                        key={index}
                        index={index}
                        name="status"
                        task={setStatus}
                        setPageNumber={setPageNumber}
                        input={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Status