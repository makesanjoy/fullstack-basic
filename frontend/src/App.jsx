import { useState } from 'react'

import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return (
    <>
      <h1>FullStack Basic</h1>
      <p>Jokes : {jokes.length}</p>
      {
        jokes.map(joke => {
          return <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
