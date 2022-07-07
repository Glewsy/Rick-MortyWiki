import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Categorys.css";


const Species = ({ setSpecies, setPageNumber }) => {
    let species = ["Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease","Robot","Cronenberg","Planet"];
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
            <h2 className="button-container">
                <button className={changedClassBtn} type="button" onClick={cambio}
                > Species <div className={arrowDirection}></div> </button>
            </h2>
            <div className={changedClass} >
                {species.map((item, index) => (
                    <FilterBTN
                        key={index}
                        index={index}
                        name="species"
                        task={setSpecies}
                        setPageNumber={setPageNumber}
                        input={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Species