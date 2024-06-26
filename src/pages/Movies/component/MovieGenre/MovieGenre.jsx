import React, { useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { useFilterMoviesQuery } from '../../../../hooks/useFilterMovies';
import './MovieGenre.style.css'

const MovieGenre = (genre,sort) => {
    const [page, setPage] = useState(1);
    const handlePageClick = ({selected}) => {
        setPage(selected+1)
    }
    const { data, isLoading, isError, error } = useFilterMoviesQuery({genre,sort,page});
    console.log(data)
  if (isLoading) {
    return <h1>Loading ...</h1>
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <Col lg={8} xs={12}>
        <Row>
            {data?.results.map((movie,index)=>
                <Col key={index} lg={4} xs={12} className='movie-card-area'> 
                    <MovieCard movie={movie} />      
                </Col>
            )}
        
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages} //전체페이지
                previousLabel="<"
                // pageClassName="page-item"
                pageLinkClassName="page-links"
                // previousClassName="page-item"
                previousLinkClassName="page-links"
                // nextClassName="page-item"
                nextLinkClassName="page-links"
                breakLabel="..."
                // breakClassName="page-item"
                // breakLinkClassName="page-link"
                containerClassName="paginations"
                activeClassName="page-links-active"
                renderOnZeroPageCount={null}
                forcePage={page-1}
            />
        </Row>
    </Col>
  )
}

export default MovieGenre
