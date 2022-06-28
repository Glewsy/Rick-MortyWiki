
import React from "react";
import "./Categorys.css"

const InputGroup = ({name, setID, total}) => {
    return <div className="inputGroup">
        <select onChange={(e)=> setID(e.target.value)} className="formGroup" id={name}>
            <option className="formOption" value="0">Choose...</option>
            {[...Array(total).keys()].map((x,index) => {
                return (
                    <option className="formOptions"  key={index} value={x + 1} > {name} - {x + 1}
                    </option>
                )
            })}
        </select>
    </div>
}

export default InputGroup;