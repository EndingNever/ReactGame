import React, { useEffect, useState } from 'react';
import PlayerCards from '../PlayerCards/PlayerCards';
import PlayField from '../PlayField/PlayField';
import "./Deck.scss"
// Dictionary - NESW Means cards North East South West of the central deck 

const Deck = (props) => {
  const deck = props.deck;
  const [NDeck, setNDeck] = useState([{value: 4, suit: "hearts"}]);
  const [EDeck, setEDeck] = useState([{value: 5, suit: "hearts"}]);
  // const [NDeck, setNDeck] = useState([]);
  // const [EDeck, setEDeck] = useState([]);
  const [SDeck, setSDeck] = useState([]);
  const [WDeck, setWDeck] = useState([]);
  const [TLKing, setTLKing] = useState([{ value: "" }])
  const [TRKing, setTRKing] = useState([{ value: "" }])
  const [BRKing, setBRKing] = useState([{ value: "" }])
  const [BLKing, setBLKing] = useState([{ value: "" }])
  const [currentPlayer, setCurrentPlayer] = useState()
  // const [player1Hand, setPlayer1Hand] = useState([{ value: "K", suit:"diamonds"}, { value: "Q", suit:"diamonds"},{ value: "J", suit:"diamonds"},{ value: "10", suit:"diamonds"},{ value: "9", suit:"diamonds"}]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [playerSelectedCard, setPlayerSelectedCard] = useState([]);
  const [indexOfCard, setIndexOfCard] = useState('')
  const [drawnCard, setDrawnCard] = useState(false);

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

  const endTurn = () => {
    if (drawnCard === true) {
      if (currentPlayer == "Player 1") {
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
    } else {
      receivingTempValue = receivingCard?.value;
    }
    if (receivingCard?.value - cardToDeposit[0]?.value === 1 || receivingTempValue - depositTempValue === 1) {
      return true;
    } else {
      return false;
    }
  }

  const onClickKing = (data) => { // Code block for placing a King
    if (data.target.className.includes('TLKing')) { // Locates the position of the King Array 
      if (TLKing[0].suit === undefined) { // IF undefined, the only card that can be pushed is a king
        if (playerSelectedCard.length > 0) { // IF the player has selected a card
          if (playerSelectedCard[0].value === "K") { // If the player selected a king they can push
            setTLKing(playerSelectedCard)
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
            console.log(playerSelectedCard[0]?.value, ", the first king, pushed to top left");
          } else {
            console.log("PSC IS NOT A KING")
          }
        } else {
          console.log('playerSelectedCard is empty')
        }
      } else { // Code block for when a King has already been placed
        const lastCard = TLKing.length - 1;
        if (playerSelectedCard.length > 0) { // If the player selected a card
          if (validateValue(playerSelectedCard, TLKing[lastCard]) === true) { // If deposit is one less than receiving
            setTLKing(oldArray => oldArray.concat(playerSelectedCard))  // [{value: "K", suit: "diamond"}, [{value: "Q", suit: "heart"}]]
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
            console.log(playerSelectedCard[0]?.value, "pushed to top left");
          } else if (validateValue(playerSelectedCard, TLKing[lastCard]) === false) {
            console.log("Card can't Go There")
          } else {
            console.log("Wait....What???")
          }
        } else {
          console.log("PSC is empty")
        }
      }
    } else if (data.target.className.includes('TRKing')) {
      if (TRKing[0].suit === undefined) { // IF undefined, the only card that can be pushed is a king
        if (playerSelectedCard.length > 0) { // IF the player has selected a card
          if (playerSelectedCard[0].value === "K") { // If the player selected a king they can push
            console.log(playerSelectedCard[0]?.value, ", the first king, pushed to top right");
            setTRKing(playerSelectedCard)
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
          } else {
            console.log(playerSelectedCard[0]?.value, " IS NOT A KING")
          }
        } else {
          console.log("playerSelectedCard is empty")
        }
      } else { // Code block for when a King has already been placed
        const lastCard = TRKing.length - 1;
        if (playerSelectedCard.length > 0) {
          if (validateValue(playerSelectedCard, TRKing[lastCard]) === true) {
            console.log(playerSelectedCard[0]?.value, " pushed to top right")
            setTRKing(oldArray => oldArray.concat(playerSelectedCard))
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
          } else if (validateValue(playerSelectedCard, TRKing[lastCard]) === false) {
            console.log("Card can't Go There")
          } else {
            console.log("Wait....What???")
          }
        } else {
          console.log("PSC is empty")
        }
      }
    } else if (data.target.className.includes('BRKing')) {
      if (BRKing[0].suit === undefined) { // IF undefined, the only card that can be pushed is a king
        if (playerSelectedCard.length > 0) { // IF the player has selected a card
          if (playerSelectedCard[0].value === "K") { // If the player selected a king they can push
            console.log(playerSelectedCard[0]?.value, ", the first king, pushed to bottom right");
            setBRKing(playerSelectedCard)
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
          } else {
            console.log(playerSelectedCard[0]?.value, " IS NOT A KING")
          }
        } else {
          console.log("playerSelectedCard is empty")
        }
      } else { // Code block for when a King has already been placed
        const lastCard = BRKing.length - 1;
        if (playerSelectedCard.length > 0) {
          if (validateValue(playerSelectedCard, BRKing[lastCard]) === true) {
            console.log(playerSelectedCard[0]?.value, " pushed to bottom right")
            setBRKing(oldArray => oldArray.concat(playerSelectedCard))
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
          } else if (validateValue(playerSelectedCard, BRKing[lastCard]) === false) {
            console.log("Card can't Go There")
          } else {
            console.log("Wait....What???")
          }
        } else {
          console.log("PSC is empty")
        }
      }
    } else if (data.target.className.includes('BLKing')) {
      if (BLKing[0].suit === undefined) { // IF undefined, the only card that can be pushed is a king
        if (playerSelectedCard.length > 0) { // IF the player has selected a card
          if (playerSelectedCard[0].value === "K") { // If the player selected a king they can push
            console.log(playerSelectedCard[0]?.value, ", the first king, pushed to bottom right");
            setBLKing(playerSelectedCard)
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
          } else {
            console.log(playerSelectedCard[0]?.value, " IS NOT A KING")
          }
        } else {
          console.log("playerSelectedCard is empty")
        }
      } else { // Code block for when a King has already been placed
        const lastCard = BLKing.length - 1;
        if (playerSelectedCard.length > 0) {
          if (validateValue(playerSelectedCard, BLKing[lastCard]) === true) {
            console.log(playerSelectedCard[0]?.value, " pushed to bottom left")
            setBLKing(oldArray => oldArray.concat(playerSelectedCard))
            setPlayerSelectedCard([]);
            checkPlayer().splice(indexOfCard, 1)
          } else if (validateValue(playerSelectedCard, BLKing[lastCard]) === false) {
            console.log("Card can't Go There")
          } else {
            console.log("something went wrong")
          }
        } else {
          console.log("PSC is empty")
        }
      }
    }
  }

  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={startGame}>Start Da Game!</button>
      <button onClick={endTurn}>End Turn</button>
      <PlayField deckDraw={deckDraw} checkPlayer={checkPlayer} validateValue={validateValue} currentPlayer={currentPlayer} indexOfCard={indexOfCard} onClickUserCard={onClickUserCard} player1Hand={player1Hand} player2Hand={player2Hand} setPlayerSelectedCard={setPlayerSelectedCard} playerSelectedCard={playerSelectedCard} NDeck={NDeck} EDeck={EDeck} SDeck={SDeck} WDeck={WDeck} setNDeck={setNDeck} setEDeck={setEDeck} setSDeck={setSDeck} setWDeck={setWDeck} TLKing={TLKing} TRKing={TRKing} BRKing={BRKing} BLKing={BLKing} setTLKing={setTLKing} setTRKing={setTRKing} setBRKing={setBRKing} setBLKing={setBLKing}
        onClickKing={onClickKing}
      />
      {currentPlayer !== undefined && <p>{currentPlayer}: select a card</p>}
      {playerSelectedCard.length > 0 && <p> {currentPlayer} is moving the <span className='deck-PSC'> {playerSelectedCard[0]?.value} of {playerSelectedCard[0]?.suit} </span></p>}
      {currentPlayer !== undefined & !drawnCard ? <p>Draw a card from the deck!</p> : null}
      {drawnCard && <p>Deck has been drawn</p>}
      <PlayerCards onClickUserCard={onClickUserCard} player1Hand={player1Hand} player2Hand={player2Hand} playerSelectedCard={playerSelectedCard} setPlayerSelectedCard={setPlayerSelectedCard} />
    </div>
  );
}

export default Deck;