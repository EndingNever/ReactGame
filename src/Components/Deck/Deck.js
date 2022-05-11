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
  const [TLKing, setTLKing] = useState([{ value: "King"}])
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

  const validateValue = (cardToDeposit, receivingCard) => {
    let depositTempValue;
    let receivingTempValue;
    if (cardToDeposit[0]?.value === "K") { // Change deposit value based on cardToDeposit
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

    if (receivingCard?.value === "K") { // change receiving value based on receivingCard?
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

  //*********TODO DELETE*********
  // console.log(cardToDeposit[0].value)
  // if (cardToDeposit[0].value == receivingCard.value - 1) {
  //   console.log("The card can be deposited!")
  // } else {
  //   console.log("The card " + cardToDeposit[0].value + " cannot be deposited to " + receivingCard.value)
  //   // console.log(receivingCard.value)
  // }
  // useEffect(() => {
  //   validateValue(playerSelectedCard, { value: 7 })
  //   // console.log(playerSelectedCard)
  // }, [playerSelectedCard, setPlayerSelectedCard])
  //*********TODO DELETE*********

  const onClickKing = (data) => {
    if (data.target.className.includes('TLKing')) {
      if (TLKing[0].suit === undefined) { // IF undefined, the only card that can be pushed is a king
        if (playerSelectedCard.length > 0) { // IF the player has selected a card
          if (playerSelectedCard[0].value === "K") { // If the player selected a king they can push
            console.log('PSC IS A KING')
            setTLKing(playerSelectedCard)
            setPlayerSelectedCard([]);
            player1Hand.splice(indexOfCard, 1)
            console.log("card spliced from player hand and pushed to array")
          } else {
            console.log("PSC IS NOT A KING")
          }
        } else {
          console.log('playerSelectedCard is empty')
        }
      } else {
        const lastCard = TLKing.length - 1;
        if (playerSelectedCard.length > 0) {
          if (validateValue(playerSelectedCard, TLKing[lastCard]) === true) {
            // console.log("validateValue is true")
            setTLKing(oldArray => oldArray.concat(playerSelectedCard))
            setPlayerSelectedCard([]);
            player1Hand.splice(indexOfCard, 1)
          } else if (validateValue(playerSelectedCard, TLKing[lastCard]) === false) {
            console.log("Card can't Go There")
          } else {
            console.log("Wait....What???")
          }
        } else {
          console.log("PSC is empty")
        }
        // validateValue(playerSelectedCard, TLKing)
        // if (playerSelectedCard[0].value === "J") {
        //   // TODO PUSH TO EXISTING ARRAY
        //   setTLKing(oldArray => oldArray.concat(playerSelectedCard))
        // } else {
        //   console.log("This card cannot be pushed!")
        // }
      }
    } else if (data.target.className.includes('TRKing')) {
      if (TRKing[0].suit === undefined) {
        if (playerSelectedCard.length > 0) {
          if (playerSelectedCard[0].value === "K") {
            console.log("PSC IS A KING")
          } else {
            console.log("PSC IS NOT A KING")
          }
        } else {
          console.log("playerSelectedCard is empty")
        }
      }
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
