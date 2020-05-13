import React, { useState } from "react";
import firebase from 'firebase/app';
import { firestore } from '../Config/config';
console.log(firestore);
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
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    finally {
      setPending(false);
    }
  }
  return (
    <div>
      <input 
        value = {content} 
        onChange={e => setContent(e.target.value)}
      />
      <button
        onClick={add}
      >
        Add
      </button>
        {pending && 'Pending...'}
    </div>
  )
};


export default Add;
