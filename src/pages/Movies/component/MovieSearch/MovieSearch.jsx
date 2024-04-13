import React, { useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useSearchMovieQuery } from '../../../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MovieSearch.style.css'

const MovieSearch = () => {
    const [query,setQuery] = useSearchParams();
    const keyword = query.get('q');
    const [page, setPage] = useState(1);

    const handlePageClick = ({selected}) => {
        setPage(selected+1)
    }

    const { data, isLoading, isError, error } = useSearchMovieQuery({keyword,page});
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
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages} //전체페이지
                previousLabel="< previous"
                // pageClassName="page-item"
                pageLinkClassName="page-links"
                // previousClassName="page-item"
                previousLinkClassName="page-links"
                // nextClassName="page-item"
                nextLinkClassName="page-links"
                breakLabel="..."
                // breakClassName="page-item"
                breakLinkClassName="page-links"
                containerClassName="paginations"
                activeClassName="page-links-active"
                renderOnZeroPageCount={null}
                forcePage={page-1}
            />
        </Row>
    </Col>
  )
}

export default MovieSearch
