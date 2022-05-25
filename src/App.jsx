
import './App.css';
import React, { useState, useEffect } from 'react';
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";


function App() {


  let [fetchData, updateFetchData] = useState([]);
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let {info, results} = fetchData;
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data)
    })();
  }, [api]);


  return (
    <div className="App">
      <h1 className="secondary-tittle">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
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
      <Pagination
      info={info}
      pageNumber={pageNumber}
      updatePageNumber={updatePageNumber}  />
    </div>
  );
}

export default App;
