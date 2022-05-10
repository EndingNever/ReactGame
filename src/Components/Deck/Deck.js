import React, { useEffect, useState } from 'react';
import PlayerCards from '../PlayerCards/PlayerCards';
import PlayField from '../PlayField/PlayField';
import "./Deck.scss"

const Deck = (props) => {
  const deck = props.deck;
  const [NDeck, setNDeck] = useState([]);
  const [EDeck, setEDeck] = useState([]);
  const [SDeck, setSDeck] = useState([]);
  const [WDeck, setWDeck] = useState([]);
  const [TLKing, setTLKing] = useState([{ value: "King" }])
  const [TRKing, setTRKing] = useState([{ value: "King" }])
  const [BRKing, setBRKing] = useState([{ value: "King" }])
  const [BLKing, setBLKing] = useState([{ value: "King" }])
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [playerSelectedCard, setPlayerSelectedCard] = useState([]);
  const [indexOfCard, setIndexOfCard] = useState('')

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

  const dealNDeck = () => {
    if (NDeck.length < 1) {
      const shift = deck.shift();
      setNDeck(oldArray => [...oldArray, shift]);
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

  const dealWDeck = () => {
    if (WDeck.length < 1) {
      const shift = deck.shift();
      setWDeck(oldArray => [...oldArray, shift]);
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

  const onClickUserCard = (data) => {
    const cardValue = data.target.childNodes[0].data;
    const cardSuit = data.target.childNodes[2].data;
    // const valueFound = player1Hand.find(x => x.value === cardValue && x.suit === cardSuit) //this will search through player1Hand and find the location of x.value (=== "K") and x.suit
    setIndexOfCard(player1Hand.indexOf(player1Hand.find(x => x.value === cardValue && x.suit === cardSuit)))
    const slice = player1Hand.slice(indexOfCard, indexOfCard + 1);
    // if (playerSelectedCard.length < 1) {
    setPlayerSelectedCard(slice)
    // } else {
    //   console.log('playerSelectedCard has 1 card already');
    // }
  }

  const onClickKing = (data) => {
    if (data.target.className.includes('TLKing')) {
      console.log("TLKing")
    } else if (data.target.className.includes('TRKing')) {
      console.log("TRKing")
    } else if (data.target.className.includes('BRKing')) {
      console.log("BRKing")
    } else if (data.target.className.includes('BLKing')) {
      console.log("BLKing")
    }
  }
  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={dealPlayers}>Deal Players</button>
      <button onClick={dealFourArrs}>Deal Four Arrs</button>
      <PlayField indexOfCard={indexOfCard} onClickUserCard={onClickUserCard} player1Hand={player1Hand} setPlayerSelectedCard={setPlayerSelectedCard} playerSelectedCard={playerSelectedCard} NDeck={NDeck} EDeck={EDeck} SDeck={SDeck} WDeck={WDeck} setNDeck={setNDeck} setEDeck={setEDeck} setSDeck={setSDeck} setWDeck={setWDeck} TLKing={TLKing} TRKing={TRKing} BRKing={BRKing} BLKing={BLKing} setTLKing={setTLKing} setTRKing={setTRKing} setBRKing={setBRKing} setBLKing={setBLKing}
        onClickKing={onClickKing}
      />
      {playerSelectedCard.length > 0 && <p>You are moving the <span className='deck-PSC'> {playerSelectedCard[0]?.value} of {playerSelectedCard[0]?.suit} </span></p>}
      {/* <PlayerCards {...{ player1Hand, player2Hand, playerSelectedCard, setPlayerSelectedCard }} /> */}
      <PlayerCards onClickUserCard={onClickUserCard} player1Hand={player1Hand} player2Hand={player2Hand} playerSelectedCard={playerSelectedCard} setPlayerSelectedCard={setPlayerSelectedCard} />
    </div>
  );
}

export default Deck;
