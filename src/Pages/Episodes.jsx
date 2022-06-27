import React, { useState, useEffect, Fragment } from 'react'
import Card from '../components/Card/Card';
import Loading from '../components/Loading';
import InputGroup from "../components/Filter/category/InputGroup"
import "./styles.css"

const Episodes = () => {

    let [results, setResults] = useState([])
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([])
    let { air_date, episode, name } = info

    let api = `https://rickandmortyapi.com/api/episode/${id}`

    useEffect(() => {


        (async function () {
            let data = await fetch(api).then(res => res.json())
            setInfo(data);

            let a = await Promise.all(
                data.characters.map((x) => {
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
                        <h1 className='secondary-tittle'>
                            Episode name :{" "}
                            <span className='textt'>{name === "" ? "unknown" : name}</span>
                        </h1>
                        <h5 className='subtitle'>
                            Air Date: {air_date === "" ? "unknown" : air_date}
                        </h5>
                    </div>
                    <div className="container">
                        <div className="primary-box">
                            <h4 className="chose-box"> Pick Episodes</h4>
                            <InputGroup  setID={setID} total = {51}  name="Episode"/>
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

export default Episodes