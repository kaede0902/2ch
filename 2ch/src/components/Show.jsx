import React from 'react';
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
    <ul>
      {values.map(value => (
        <li key = {value.id}>{value.content}</li>
      ))}
    </ul>
  )
}




export default Show;
