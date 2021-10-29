import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card/card';
import Form from './components/form/form';

import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  
  useEffect( () => {
     axios.get("http://localhost:4000/api/books")
    .then((res) => {setCards(res.data); console.log(res.data)})
    .catch(error => {
      console.log("hola", error);
    });
  }, []);

  return (
    <div className="App">
      <Form />
      <div>
      {cards.length ? cards.map((card, index) => <Card key={index} id={card?._id} title={card?.title} author= {card?.author} genre= {card.genre} read={card?.read}/>) : ""}
      </div>
      
      
    </div>
  );
}

export default App;
