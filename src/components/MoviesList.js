import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination'
import { useSelector } from 'react-redux'
import Spinner from "./Spinner";
const MoviesList = ({ movies, getPage, pageCount }) => {
  const isloading = useSelector((state) => state.movies.isloading)
  return (
    <Row className="mt-3">
      {!isloading && movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <Spinner />}

      {movies.length >= 1 ? (<PaginationComponent getPage={getPage} pageCount={pageCount} />) : null}

    </Row>
  );
};

export default MoviesList;
