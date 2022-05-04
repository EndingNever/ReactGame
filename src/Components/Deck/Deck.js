import React, { useEffect, useState } from 'react';
import PlayerCards from '../PlayerCards/PlayerCards';
import PlayField from '../PlayField/PlayField';
import "./Deck.scss"

const Deck = (props) => {
  const deck = props.deck;
  const [setupCards, setSetupCards] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);



  const dealPlayerHand = (deck) => {
    if (player1Hand.length < 1) {
      for (let i = 0; i < 7; i++) {
        const shift = deck.shift();
        setPlayer1Hand(oldArray => [...oldArray, shift]);
      }
    }
    if (player2Hand.length < 1) {
      for (let i = 0; i < 7; i++) {
        const shift = deck.shift();
        setPlayer2Hand(oldArray => [...oldArray, shift]);
      }
    }
  }

  const dealPlayer1 = () => {
    dealPlayerHand(deck);
  }

  const dealSetupCards = () => {
    for (let i = 0; i < 4; i++) {
      const shift = deck.shift();
      setSetupCards(oldArray => [...oldArray, shift]);
    }
  }

  console.log(player1Hand)
  console.log(player2Hand)
  console.log(setupCards)

  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={dealPlayer1}>PlayerHand</button>
      <button onClick={dealSetupCards}>Deal Setup</button>
      <PlayField setupCards={setupCards} />
      <PlayerCards player1Hand={player1Hand} player2Hand={player2Hand} />
    </div>
  );
}

export default Deck;
