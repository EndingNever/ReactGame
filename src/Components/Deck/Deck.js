import React, { useEffect } from 'react';
import "./Deck.scss"

const Deck = (props) => {
  const deck = props.deck;

  return (
    <div className='deck-container'>
      <p>Is the deck ready?</p>
      <button onClick={()=>console.log(deck.length)}>Check Deck</button> {/* This will shuffle the deck */}
      {deck[0]?.value}
      {deck[0]?.suit}
    </div>
  );
}

export default Deck;
