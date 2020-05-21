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
  let num = 0;
  
  return (
    <Row>
      <Col>
        {values.map(value => (
            <div key = {value.id}>
                {++num}:名無しさん:{value.id}:
                {value.created_at ? 
                  (value.created_at.toDate().toString()) : 
                  "NO DATE"
                }
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
