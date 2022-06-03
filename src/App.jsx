
import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";


function App() {
  let [fetchData, updateFetchData] = useState();
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data)
    })();
  }, [api]);

  return (
    <div className="App">
      {fetchData ?
        <Fragment>
          <h1 className="secondary-tittle">Characters</h1>
          <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
          <div className="container">
            <div className="primary-box">
              <Filter
                pageNumber={pageNumber}
                status={status}
                updateStatus={updateStatus}
                updateSpecies={updateSpecies}
                updateGender={updateGender}
                updatePageNumber={updatePageNumber}
              />
            </div>
            <div className="secondary-box">
              <div className="cards">
                <Card results={fetchData.results} />
              </div>
            </div>
          </div>
          <Pagination
            info={fetchData.info}
            pageNumber={pageNumber}
            updatePageNumber={updatePageNumber} />
        </Fragment>
        : <Loading />}
    </div>
  );
}

export default App;
