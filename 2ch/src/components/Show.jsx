import React from 'react';
import { Row, Col,} from 'react-bootstrap';
import firebase from 'firebase/app';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestore} from '../Config/config';
console.log(firestore && false);


const ref = firebase.firestore().collection('writings');

const Show = () => {
  const [values, loading, error,] = useCollectionData(
    ref, {idField: 'id'});
  if(loading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>{`Error: ${error.message}`}</div>
  }
  console.log(values);
  
  return (
    <Row>
      <Col>
        {values.map(value => (
            <div key = {value.id}>
              <div>
                1:名無しさん:{value.id}:2019.05.17
              </div>
              <div>
                {value.content}
              </div>
            </div>
        ))}
      </Col>
    </Row>
  )
}




export default Show;
