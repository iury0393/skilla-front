import React, { useState } from "react";

import { Modal, Button, Navbar, Nav } from 'react-bootstrap';

import Register from "./Register";
import Login from "./Login";

import HomePage from "../pages/Homepage/homepage.component.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../assets/logo.png';

const Auth = () => {
  const [auth, setAuth] = useState("LOGIN");

  const login = () => setAuth("LOGIN");
  const register = () => setAuth("REGISTER");

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  if (auth === "LOGIN") {
    return (
      <>
        <>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>Entre no Skilla</Modal.Title>
            </Modal.Header>
            <Modal.Body><Login register={register} /></Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={hideModal}>Cancelar</Button>
            </Modal.Footer>
          </Modal>
        </>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="90"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <></>
            </Nav>
            <Nav.Link><Button variant="primary" onClick={showModal}>Entrar</Button></Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <HomePage />
      </>
    );
  }

  if (auth === "REGISTER") {
    return (
      <>
        <>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>Entre no Skilla</Modal.Title>
            </Modal.Header>
            <Modal.Body><Register login={login} /></Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={hideModal}>Cancelar</Button>
            </Modal.Footer>
          </Modal>
        </>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="90"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <></>
            </Nav>
            <Nav.Link><Button variant="primary" onClick={showModal}>Registrar</Button></Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <HomePage />
      </>
    );
  }
};

export default Auth;
