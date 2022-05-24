
import './App.css';
import React, { useState, useEffect } from 'react';
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";


function App() {


  let api = `https://rickandmortyapi.com/api/character/?page=1`
  let [fetchData, updateFetchData] = useState([]);
  let {info, results} = fetchData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data)
    })();
  }, [api]);


  return (
    <div className="App">
      <h1 className="secondary-tittle">Characters</h1>
      <div className="container">
        <div className="primary-box">
          Filter compontents will be placed here
        </div>
        <div className="secondary-box">
            <div className="cards">
              <Card results={results}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
