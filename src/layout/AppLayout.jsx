import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom'; /* router 아래의 자손들을 가지고 오게 해 줌 */

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault()
    navigate(`/movies?q=${keyword}`)
    setKeyword('')
  }

  return (
    <div>
      <Navbar expand="lg" className="nav-style pt-0 pb-0" variant='dark'>
        <Container fluid className='mx-1'>
          <Navbar.Brand href="/">
            <span className="brand-name">NOTEXT</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={(event)=>console.log(event)}/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/movies">MOVIES</Nav.Link>

            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword} expand={true}>
              <Form.Control
                type="search"
                placeholder="SEARCH"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event)=>setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type='submit'>SEARCH</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default AppLayout
