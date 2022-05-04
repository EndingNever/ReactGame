import React, { useEffect, useState } from 'react';
import PlayerCards from '../PlayerCards/PlayerCards';
import PlayField from '../PlayField/PlayField';
import "./Deck.scss"

const Deck = (props) => {
  const deck = props.deck;
  const [setupCards, setSetupCards] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);



  const dealPlayerHand =(deck)=>{ // This function takes an array (deck) which in this case will also be called deck
    if (player1Hand.length < 1) { // If Player 1 hand is not empty (which should never happen right now)
      for (let i = 0; i < 7; i++) { // i < 7 because the player gets 7 cards
        const shift = deck.shift(); // Mutate the array by removing the first element
        setPlayer1Hand(oldArray => [...oldArray, shift]); // keep the old array which will be accumulating cards and push to it 
      }
    } else {
      console.log("Player 1 Hand Is Full")
    }
    if (player2Hand.length < 1) { // Same as above
      for (let i = 0; i < 7; i++) {
        const shift = deck.shift();
        setPlayer2Hand(oldArray => [...oldArray, shift]);
      }
    }
    console.log("Player 2 Hand Is Full")
  }

  const dealPlayers = () => { // This is so I can deal the players on call
    dealPlayerHand(deck);
  }

  const dealSetupCards = () => {
    if(setupCards.length < 4){

      for (let i = 0; i < 4; i++) {
        const shift = deck.shift();
        setSetupCards(oldArray => [...oldArray, shift]);
      }
    } else{
      console.log("setup cards are out")
    }
  }
  
  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={dealPlayers}>Deal Players</button>
      <button onClick={dealSetupCards}>Deal Setup</button>
      <PlayField setupCards={setupCards} />
      <PlayerCards player1Hand={player1Hand} player2Hand={player2Hand} />
    </div>
  );
}

export default Deck;
