import React from 'react';

import { Card } from './components/';
import movies from './data.json';

function App() {
  return (
    <main>
      {movies.map(movie => (
        <Card classes="mr" key={`${movie.id}`}>
           <Card.Body> hello</Card.Body>
        </Card>
      ))}
    </main>
  );
}

export default App;
