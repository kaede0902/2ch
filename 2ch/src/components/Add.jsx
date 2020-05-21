import React, { useState } from "react";
import {Col, Row,} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import firebase from 'firebase/app';
import { firestore } from '../Config/config';
console.log(firestore && false);



const ref = firebase.firestore().collection('writings');

const Add = () => {
  const [content, setContent] = useState('');
  const [pending, setPending] = useState(false);

  const add = async () => {
    setContent('');
    setPending(true);

    try {
      await ref.add({
        content,
        created_at: firebase.firestore.FieldValue.serverTimestamp,
      });
    }
    finally {
      setPending(false);
    }
  }
  return (
    <div>
    <Form>
      <Row>
        <Col md = {7}>
          <Form.Control 
            placeholder='write here' 
            value = {content} 
            onChange={e => setContent(e.target.value)}
          />
        </Col>
        <Col md = {5}>
          <Button variant="primary" 
            type="submit" onClick={add}
            >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
    {pending && 'Pending...'}
    </div>
  )
};


export default Add;
