import React, { useEffect, useState } from 'react';
import PlayerCards from '../PlayerCards/PlayerCards';
import PlayField from '../PlayField/PlayField';
import "./Deck.scss"
// Dictionary - NESW Means cards North East South West of the central deck 

const Deck = (props) => {
  const deck = props.deck;
  const [NDeck, setNDeck] = useState([]);
  const [EDeck, setEDeck] = useState([]);
  const [SDeck, setSDeck] = useState([]);
  const [WDeck, setWDeck] = useState([]);
  // const [TLKing, setTLKing] = useState([{ value: "" }])
  // const [TRKing, setTRKing] = useState([{ value: "" }])
  // const [BRKing, setBRKing] = useState([{ value: "" }])
  // const [BLKing, setBLKing] = useState([{ value: "" }])
  const [currentPlayer, setCurrentPlayer] = useState()
  // const [player1Hand, setPlayer1Hand] = useState([{ value: "K", suit:"diamonds"}, { value: "Q", suit:"diamonds"},{ value: "J", suit:"diamonds"},{ value: "10", suit:"diamonds"},{ value: "9", suit:"diamonds"}]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [playerSelectedCard, setPlayerSelectedCard] = useState([]);
  const [indexOfCard, setIndexOfCard] = useState('')
  const [drawnCard, setDrawnCard] = useState(false);
  const [playerSelectedDeck, setPlayerSelectedDeck] = useState([])
  const [win, setWin] = useState([false])

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

  const deckDraw = () => {
    const shift = deck.shift();
    if (drawnCard === false) {
      if (currentPlayer == "Player 1") {
        setPlayer1Hand(oldArray => [...oldArray, shift])
        setDrawnCard(true);
      } else if (currentPlayer == "Player 2") {
        setPlayer2Hand(oldArray => [...oldArray, shift])
        setDrawnCard(true);
      } else {
        console.log("card cannot be drawn")
      }
    } else {
      console.log('card has been drawn')
    }
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

  const startGame = () => {
    dealPlayers();
    dealFourArrs();
    setCurrentPlayer("Player 1")
  }

  const checkPlayer = () => {
    if (currentPlayer == "Player 1") {
      return player1Hand;
    } else if (currentPlayer == "Player 2") {
      return player2Hand;
    } else {
      console.log("No Current Player")
    }
  }
  
  const checkWin = () => {
    if (drawnCard === true){
      if (checkPlayer().length === 0){
        console.log(currentPlayer, "has ", checkPlayer().length, " cards")
        return true
      } else {
        return false;
      }
    }
  }

  const endTurn = () => {
    if (drawnCard === true) {
      if (checkWin() === true) {
        setWin(true)
        console.log(currentPlayer, " has won")
      } else if (currentPlayer == "Player 1") {
        setCurrentPlayer("Player 2")
        setDrawnCard(false)
      } else if (currentPlayer == "Player 2") {
        setCurrentPlayer("Player 1")
        setDrawnCard(false)
      } else {
        console.log("No Current Player");
      }

    } else {
      console.log(currentPlayer, "Must Draw a Card")
    }
    setPlayerSelectedCard([])
  }
console.log(win)
  const onClickUserCard = (data) => { // Sets the card the player wants to move
    // //if(data.target.className==="player1Cards"){
    //  // console.log("Player 1 Hand")
    //  // setCurrentPlayer("Player 1");
    // //} else if (data.target.className==="player2Cards"){
    //  // console.log("Player 2 Hand")
    //  // setCurrentPlayer("Player 2")
    // //}
    const cardValue = data.target.childNodes[0].data;
    const cardSuit = data.target.childNodes[2].data;
    setIndexOfCard(checkPlayer().indexOf(checkPlayer().find(x => x.value == cardValue && x.suit == cardSuit))) //this will search through checkPlayer() and find the location of x.value and x.suit
    const slice = checkPlayer().slice(indexOfCard, indexOfCard + 1);
    setPlayerSelectedCard(slice)
    // // if (currentPlayer==="Player 1"){
    //   // setIndexOfCard(player1Hand.indexOf(player1Hand.find(x => x.value == cardValue && x.suit == cardSuit))) //this will search through player1Hand and find the location of x.value and x.suit
    //   // const slice = player1Hand.slice(indexOfCard, indexOfCard + 1);
    // //   // if (playerSelectedCard.length < 1) {
    // //     setPlayerSelectedCard(slice)
    // //   } else if(currentPlayer==="Player 2"){
    // //     setIndexOfCard(player2Hand.indexOf(player2Hand.find(x => x.value == cardValue && x.suit == cardSuit))) //this will search through player2Hand and find the location of x.value and x.suit
    // //     const slice = player2Hand.slice(indexOfCard, indexOfCard + 1);
    // //       setPlayerSelectedCard(slice)
    // //   } else {
    // //     console.log("no player")
    // //   }
  }

  const validateValue = (cardToDeposit, receivingCard) => { // Code for validating a legal move
    let depositTempValue;
    let receivingTempValue;
    if (cardToDeposit[0]?.value === "K") { // Change deposit value based on cardToDeposit (the card being pushed)
      depositTempValue = 13;
    } else if (cardToDeposit[0]?.value === "Q") {
      depositTempValue = 12;
    } else if (cardToDeposit[0]?.value === "J") {
      depositTempValue = 11;
    } else if (cardToDeposit[0]?.value === "A") {
      depositTempValue = 1;
    } else {
      depositTempValue = cardToDeposit[0]?.value;
    }

    if (receivingCard?.value === "K") { // change receiving value based on receivingCard (the array receiving the card)
      receivingTempValue = 13;
    } else if (receivingCard?.value === "Q") {
      receivingTempValue = 12;
    } else if (receivingCard?.value === "J") {
      receivingTempValue = 11;
    } else if (receivingCard?.value === "A") {
      receivingTempValue = 1;
    } else if (receivingCard?.value === undefined) {
      receivingTempValue = "empty"
    } else {
      receivingTempValue = receivingCard?.value;
    }
    if (receivingCard?.value - cardToDeposit[0]?.value == 1 || receivingTempValue - depositTempValue == 1 || receivingTempValue === "empty") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={startGame}>Start Da Game!</button>
      <button onClick={endTurn}>End Turn</button>
      {win === true && <h1>{currentPlayer} WINNER!</h1>}
      {win === true && <button>Restart?</button>}
      <PlayField
        playerSelectedDeck={playerSelectedDeck}
        setPlayerSelectedDeck={setPlayerSelectedDeck}
        deckDraw={deckDraw}
        checkPlayer={checkPlayer}
        validateValue={validateValue}
        indexOfCard={indexOfCard}
        setPlayerSelectedCard={setPlayerSelectedCard}
        playerSelectedCard={playerSelectedCard}
        NDeck={NDeck}
        EDeck={EDeck}
        SDeck={SDeck}
        WDeck={WDeck}
        setNDeck={setNDeck}
        setEDeck={setEDeck}
        setSDeck={setSDeck}
        setWDeck={setWDeck}
      />
      {currentPlayer !== undefined && <p>{currentPlayer}: select a card</p>}
      {playerSelectedCard.length > 0 && <p> {currentPlayer} is moving the <span className='deck-PSC'> {playerSelectedCard[0]?.value} of {playerSelectedCard[0]?.suit} </span></p>}
      {playerSelectedDeck.length > 0 && <p>Deck selected: {playerSelectedDeck[0]?.value} {playerSelectedDeck[0]?.suit}</p>}
      {currentPlayer !== undefined & !drawnCard ? <p>Draw a card from the deck!</p> : null}
      {drawnCard && <p>Deck has been drawn</p>}
      <PlayerCards onClickUserCard={onClickUserCard} player1Hand={player1Hand} player2Hand={player2Hand}  />
    </div>
  );
}

export default Deck;