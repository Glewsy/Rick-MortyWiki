import FilterBTN from "../FilterBTN";
import "./Categorys.css"



const Status = ({updateStatus, updatePageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion">
            <h2 className="accordionText" id="headingOne">
                <button className="accordionBtn" type="button" 
                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne"
                > Status </button>
            </h2>
            <div className="accordionCollapse"
            aria-labelledby="headingOne" data-bs-parent="#accordionExample"
            >
            <div className="accordionBody">
                {status.map((item,index)=> (
                    <FilterBTN
                    key={index}
                    index={index}
                    name="status"
                    updateStatus={updateStatus}
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