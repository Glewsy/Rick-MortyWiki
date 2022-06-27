
import React from "react";


const InputGroup = ({name, setID, total}) => {
    return <div className="inputGroup">
        <select onChange={(e)=> setID(e.target.value)} className="formGroup" id={name}>
            <option value="0">Choose...</option>
            {[...Array(total).keys()].map((x,index) => {
                return (
                    <option  key={index} value={x + 1} > {name} - {x + 1}
                    </option>
                )
            })}
        </select>
    </div>
}

export default InputGroup;