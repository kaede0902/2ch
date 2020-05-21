import React from 'react';
import {Col, Row,} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Header = () => {
  return (
    <Row className='my-3'>
      <Col  xs={3}md={2}>
        <Button variant="outline-success"
          >0902ch</Button>
      </Col>
      <Col xs={3}md={2}>
        <Button variant="outline-info">SHOW ALL</Button>
      </Col>
      <Col xs={3}md={2}>
        <Button variant="outline-secondary">SHOW 01~</Button>
      </Col>
      <Col xs={3}md={2}>
        <Button variant="outline-primary">SHOW ALL</Button>
      </Col>
    </Row>
  )
}

export default Header;
