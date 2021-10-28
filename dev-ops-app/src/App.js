import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card/card';
import Form from './components/form/form';

import axios from 'axios';

function App() {
  const [cards, setCards] = useState([{title: "carta", description: "hola"}]);
  
  useEffect(async () => {
    axios.get('localhost:4000/api/books')
    .then((res) => setCards(res))
    .catch(error => {
      console.log("hola", error);
    });
  }, []);

  return (
    <div className="App">
      <Form />
      {cards.map((card, index) => <Card key={index} title={card?.title} description= {card?.description}/>)}
      
    </div>
  );
}

export default App;
