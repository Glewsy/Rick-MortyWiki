import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Categorys.css";

const Gender = ({setGender, setPageNumber}) => {
    let genders = ["female", "male", "genderless", "unknown"]
    let [changedClass, setChangedClass] = useState("accordionBody")
    let [changedClassBtn, setChangedClassBtn] = useState("accordionBtn")
    let [arrowDirection, setArrowDirection] = useState("arrowOff")

    function cambio() {
        changedClass === "accordionBody" ? setChangedClass("accordionBodyShow") : setChangedClass("accordionBody")
        changedClassBtn === "accordionBtn" ? setChangedClassBtn("accordionBtnActive") : setChangedClassBtn("accordionBtn")
        arrowDirection === "arrowOff" ? setArrowDirection("arrowOn") : setArrowDirection("arrowOff")

    }



  return (
    <div className="accordion">
    <h2 className="accordionText">
        <button className={changedClassBtn} type="button" onClick={cambio}
        > Gender <div className={arrowDirection}></div> </button>
    </h2>
    <div className={changedClass} id="accordionBody">
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