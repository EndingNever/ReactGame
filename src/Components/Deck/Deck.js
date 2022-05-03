import React, { useEffect } from 'react';
import "./Deck.scss"

const Deck = (props) => {
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const player1Hand = [];
  const player2Hand = [];

  const deck = new Array();

  const getDeck = () => {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { value: values[x], suit: suits[i] };
        deck.push(card);
      }
    }
  }

  const shuffleDeck = () => {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * deck.length));
      let location2 = Math.floor((Math.random() * deck.length));
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }

   useEffect(()=>{
    //  getDeck();
    //  shuffleDeck();
  }, [])
    getDeck();
    shuffleDeck();

  return (
    <div  className='deck-container'>
      <p>Is the deck ready?</p>
      <button onClick={()=>console.log(deck.length)}>Check Deck</button>
      {deck.map((card) => (
        <div>
          {card.value}
          {card.suit}
        </div>
      ))}
    </div>
  );
}

export default Deck;
