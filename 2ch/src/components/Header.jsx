import React from 'react';
import {Col, Row,} from 'react-bootstrap';

const Header = () => {
  return (
    <Row className='my-3'>
      <Col md={2}>0902ch</Col>
      <Col md={2}>SHOW ALL</Col>
      <Col md={2}>SHOW 1~</Col>
      <Col md={2}>Latest50</Col>
      <Col md={4}>Latest50</Col>
    </Row>
  )
}

export default Header;
