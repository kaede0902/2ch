import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,} from 'react-bootstrap';
import Show from './components/Show';
import Add from './components/Add';
import Header from './components/Header'


function App() {
  return (
    <Container className=''>
      <Header />
        <Show/ >
      <Row>
        <Add />
      </Row>
    </Container>
  );
}

export default App;
