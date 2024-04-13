import React, { useState } from 'react'
import { Container, Row, Col, Alert, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '../../../../hooks/useMovieDetail';
import './MovieInfo.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { YouTubeModal } from '../../YouTubeModal/YouTubeModal';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const MovieInfo = () => {
    let {id} = useParams();
    const [modalShow,setModalShow] = useState(false);
    const {data, isLoading, isError, error} = useMovieDetail(id);
    console.log(data)
    if (isLoading) {
      return <h1>Loading...</h1>
    }
    if (isError) {
      return <Alert>{error.message}</Alert>
    }
  return (
    <Container>
      <Row className='poster-box-margin'>
        <Col className='poster-area'>
          <div
            style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`+")"}}
            className='detail-poster'>
          </div>
        </Col>
        <Col className='detail-text'>
        {data.genres.map((item)=><Badge bg="danger" className='me-1'>{item.name}</Badge>)}
          <h1 className='mt-3'>{data.title.toUpperCase()}</h1>
          <h3>{data.tagline}</h3>
          <div className='detail-info'>
            <div><FontAwesomeIcon icon={faStar} className='text-warning' /> {Math.round(data.vote_average*100)/100}</div>
            <div><FontAwesomeIcon icon={faHeart} className='text-danger' /> {Math.round(data.popularity)}</div>
          </div>
          <p className='text-box'>{data.overview}</p>
          <div className='detail-button-area'>
            <div><button className='detail-button'>BUDGET</button>$ {(data.budget).toLocaleString()}</div>
            <div><button className='detail-button'>REVENUE</button>$ {(data.revenue).toLocaleString()}</div>
            <div><button className='detail-button'>RELEASE DATE</button>{data.release_date}</div>
            <div><button className='detail-button'>RUNTIME</button>{data.runtime} min</div>
            <button onClick={()=>setModalShow(true)} className='preview-btn'><FontAwesomeIcon icon={faCirclePlay} className='text-info'/> PREVIEW</button>
          </div>
          <YouTubeModal show={modalShow} onHide={()=>setModalShow(false)} />
        </Col>
      </Row>
    </Container>
  )
}

export default MovieInfo
