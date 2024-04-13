import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import MovieSearch from './component/MovieSearch/MovieSearch'
import MovieGenre from './component/MovieGenre/MovieGenre'
import './MoviePage.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'


const MoviePage = () => {
  const [query,setQuery] = useSearchParams();
  const keyword = query.get('q');
  const [genre,setGenre] = useState('');
  const genreData = useMovieGenreQuery().data;
  const [sort,setSort] = useState('popularity.desc');

  const getFilterGenre = (event) => {
    let genreId = event.target.id;
    setGenre(genreId)
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <h2 className='mt-5'>GENRE</h2>
          {/* {genreData?.map((item)=>(<button className='genre-button' onClick={(event)=>getFilterGenre(event)} id={item.id} key={item.id}>{item.name}</button>))} */}
          <Dropdown>
            <Dropdown.Toggle bsPrefix={'toggle-box'}>
              CHOOSE A GENRE  <FontAwesomeIcon icon={faChevronDown} />
            </Dropdown.Toggle>
            <Dropdown.Menu className={'toggle-menu'}>
              {genreData?.map((item)=>(<Dropdown.Item onBlur={(event)=>getFilterGenre(event)} id={item.id} key={item.id} className={'toggle-text'}>{item.name}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>
          <h2 className='mt-5'>SORT</h2>
          <button className='genre-button' onClick={()=>setSort('popularity.desc')}>POPULARITY</button>
          <button className='genre-button' onClick={()=>setSort('vote_average.desc')}>RATING</button>
          <button className='genre-button' onClick={()=>setSort('primary_release_date')}>RELEASE</button>
        </Col>
        {keyword?<MovieSearch />:<MovieGenre genre={genre} sort={sort}/>}
      </Row>
    </Container>
  )
}

export default MoviePage
