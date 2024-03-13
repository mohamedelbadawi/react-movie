import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from './components/MovieDetails'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from "./redux/slices/MovieSlice";

function App() {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.allMovies)
  const pageCount = useSelector((state) => state.movies.pageCount)




  useEffect(() => {
    dispatch(getAllMovies())

  }, [dispatch])


  return (
    <div className="font color-body ">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<MoviesList movies={movies} pageCount={pageCount} />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;