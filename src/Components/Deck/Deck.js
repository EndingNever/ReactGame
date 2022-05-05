import React, { useEffect, useState } from 'react';
import PlayerCards from '../PlayerCards/PlayerCards';
import PlayField from '../PlayField/PlayField';
import "./Deck.scss"

const Deck = (props) => {
  const deck = props.deck;
  const [setupCards, setSetupCards] = useState([]);
  const [NDeck, setNDeck] = useState([]);
  const [EDeck, setEDeck] = useState([]);
  const [SDeck, setSDeck] = useState([]);
  const [WDeck, setWDeck] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [playerSelectedCard, setPlayerSelectedCard] = useState([]);


  const dealPlayerHand = (deck) => { // This function takes an array (deck) which in this case will also be called deck
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
    dealPlayerHand(deck); // Calls the dealPlayerHand function and passes through props.deck
  }

  //TODO translate to 4arrs
  // const dealSetupCards = () => {
  //   if (setupCards.length < 4) { // Checks to see if the array of setupCards has less than 4, otherwise the setup cards have already been dealt
  //     for (let i = 0; i < 4; i++) {
  //       const shift = deck.shift(); // Draws 4 cards from the shuffled deck
  //       setSetupCards(oldArray => [...oldArray, shift]); // pushes the cards to the setupCards array
  //     }
  //   } else {
  //     console.log("setup cards are out") // If setupCards.length > 4, that means cards have already been setup
  //   }
  // }

  const dealNDeck = () => {
    if (NDeck.length < 1) {
    const shift = deck.shift();
      setNDeck(oldArray => [...oldArray, shift]);
    } else {
      console.log("Setup is done")
    }
  }
  const dealWDeck = () => {
    if (WDeck.length < 1) {
    const shift = deck.shift();
      setWDeck(oldArray => [...oldArray, shift]);
    } else {
      console.log("Setup is done")
    }
  }

  const dealEDeck = () => {
    if (EDeck.length < 1) {
    const shift = deck.shift();
      setEDeck(oldArray => [...oldArray, shift]);
    } else {
      console.log("Setup is done")
    }
  }

  const dealSDeck = () => {
    if (SDeck.length < 1) {
      const shift = deck.shift();
      setSDeck(oldArray => [...oldArray, shift]);
    } else {
      console.log("Setup is done")
    }
  }

  const dealFourArrs = () => {
    dealNDeck();
    dealWDeck();
    dealEDeck();
    dealSDeck();
  }

  //TODO Following function is based on dealSetupCards above, may remove 
  // const setDecks = (arr) => { 
  //   if (setupCards.length === 0) {
  //     dealSetupCards();
  //   }
  //   if (arr.length < 1) {
  //     const shift = deck.shift();
  //     arr(oldArray => [...oldArray, shift]);
  //   }
  // }

  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={dealPlayers}>Deal Players</button>
      <button onClick={dealFourArrs}>Deal Four Arrs</button>
      <PlayField playerSelectedCard={playerSelectedCard} NDeck={NDeck} EDeck={EDeck} SDeck={SDeck} WDeck={WDeck} />
      <PlayerCards {...{ player1Hand, player2Hand, playerSelectedCard, setPlayerSelectedCard }} />
    </div>
  );
}

export default Deck;
