import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Categorys.css";

const Gender = ({setGender, setPageNumber}) => {
    let genders = ["female", "male", "genderless", "unknown"]
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
        > Gender <div className={arrowDirection}></div> </button>
    </h2>
    <div className={changedClass} >
        {genders.map((item, index) => (
            <FilterBTN
                key={index}
                index={index}
                name="gender"
                task={setGender}
                setPageNumber={setPageNumber}
                input={item}
            />
        ))}
    </div>
</div>
  )
}

export default Gender