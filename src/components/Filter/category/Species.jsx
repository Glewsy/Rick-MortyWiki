import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Categorys.css";


const Species = ({ setSpecies, setPageNumber }) => {
    let species = ["Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease","Robot","Cronenberg","Planet"];
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
                > Species </button>
            </h2>
            <div className={changedClass} id="accordionBody">
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