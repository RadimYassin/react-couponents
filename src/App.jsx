import React from 'react';

import { Card } from './components/';
import movies from './data.json';
import "./styles/App.css"
function App() {
  return (
    <main>
      {movies.map(movie => (
        <Card classes="mr" key={`${movie.id}`}>
           <Card.Img src={movie.image} alt={movie.title}/>
           <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.desc}</Card.Text>
              <Card.Btn>{movie.ctaText}</Card.Btn>
           </Card.Body>
        </Card>
      ))}
    </main>
  );
}

export default App;
