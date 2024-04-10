import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Alert } from 'bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import GenreFilter from './component/GenreFilter'

const MoviePage = () => {
  const [query,setQuery] = useSearchParams();
  const keyword = query.get('q');
  const [page, setPage] = useState(1);
  const handlePageClick = ({selected}) => {
    setPage(selected+1)
  }
  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword,page})
  console.log(data)
  if (isLoading) {
    return <h1>Loading ...</h1>
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <GenreFilter />
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie,index)=>
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            )}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} //전체페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage
