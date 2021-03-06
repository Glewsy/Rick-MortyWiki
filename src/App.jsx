
import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardsDetails"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/Rick-MortyWiki" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {


  let [fetchData, setFetchData] = useState();
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data)
    })();
  }, [api]);

  return (
    <div className="App">
      {fetchData ?
        <Fragment>
          <h1 className="secondary-tittlee">Characters</h1>
          <Search setSearch={setSearch} setPageNumber={setPageNumber} />
          <div className="container">
            <div className="primary-box">
              <Filter
                pageNumber={pageNumber}
                status={status}
                setStatus={setStatus}
                setSpecies={setSpecies}
                setGender={setGender}
                setPageNumber={setPageNumber}
              />
            </div>
            <div className="secondary-box">
              <div className="cards">
                <Card page="/" results={fetchData.results} />
              </div>
            </div>
          </div>
          <Pagination
            info={fetchData.info}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber} />

        </Fragment>
        : <Loading />}
    </div>
  );
}

export default App;
