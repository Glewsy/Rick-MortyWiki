import React, { useState, useEffect, Fragment } from 'react'
import Card from '../components/Card/Card';
import Loading from '../components/Loading';
import InputGroup from "../components/Filter/category/InputGroup"
import "./styles.css"

const Location = () => {

    let [results, setResults] = useState([])
    let [number, setNumber] = useState(1);
    let [info, setInfo] = useState([])
    let { dimension, type, name } = info

    let api = `https://rickandmortyapi.com/api/location/${number}`

    useEffect(() => {


        (async function () {
            let data = await fetch(api).then(res => res.json())
            setInfo(data);

            let a = await Promise.all(
                data.residents.map((x) => {
                    return fetch(x).then((res) => res.json())
                })
            );
            setResults(a)
        })()
    }, [api]);
    return (
        <div className='App'> {
            info ?
                <Fragment>
                    <div className="tittle-container">
                        <h1 className='primary-tittle'>
                           Location :{" "}
                            <span className='primary-tittle-name'>{name === "" ? "unknown" : name}</span>
                        </h1>
                        <h5 className='secondary-tittle'>
                         Dimension: {dimension === "" ? "unknown" : dimension}
                        </h5>
                        <h6 className='characters-tittle'>
                           Type : {type === ""? "Unknown" : type}
                        </h6>
                    </div>
                    <div className="container">
                        <div className="primary-box">
                            <h4 className="episode-box"> Pick Location</h4>
                            <InputGroup  name="Location" setID = {setNumber}  total={126}/>
                        </div>
                        <div className="secondary-box">
                            <div className="cards">
                                <Card results={results}  />
                            </div>
                        </div>
                    </div>
                </Fragment>


                : <Loading />} </div>
    )
}

export default Location