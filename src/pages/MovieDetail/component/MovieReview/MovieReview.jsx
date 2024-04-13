import React, { useState } from 'react'
import { useMovieReview } from '../../../../hooks/useMovieReview'
import { useParams } from 'react-router-dom'
import { Alert, Col, Container } from 'react-bootstrap';
import './MovieReview.style.css'

const MovieReview = () => {
    let {id} = useParams();
    const [viewAllText,setViewAllText] = useState({});
    const viewText = (id) => {
        console.log(id)
        setViewAllText((prevViewAllText)=>({
            ...prevViewAllText,
            [id]: !prevViewAllText[id]
        }))
    }
    const {data,isLoading,isError,error} = useMovieReview(id)
    if (isLoading) {
        <h1>Loading...</h1>
    }
    if (isError) {
        <Alert>{error.message}</Alert>
    }
  return (
    <Container className='center'>
        <Col lg={10}>
            <h4>REVIEW</h4>
            {data?.results.map((item)=>(
                <div className='review-box' key={item.id}>
                    <h2>{item.author}</h2>
                    {viewAllText[item.id]?<p>{item.content}</p>:<p className='review-text'>{item.content}</p>}
                    <button onClick={()=>viewText(item.id)}>{viewAllText[item.id]?'닫기':'열기'}</button>
                </div>
            ))}
        </Col>
        
    </Container>
  )
}

export default MovieReview
