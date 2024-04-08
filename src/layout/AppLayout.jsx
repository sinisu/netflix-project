import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom'; /* router 아래의 자손들을 가지고 오게 해 줌 */

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav-style pt-0 pb-0" variant='dark'>
        <Container fluid>
          <Navbar.Brand href="#">
            <span className="brand-name">NOTEXT</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">HOME</Nav.Link>
              <Nav.Link href="#action2">LINK</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="SEARCH"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">SEARCH</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default AppLayout
