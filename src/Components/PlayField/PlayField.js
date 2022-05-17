import React, { useState } from 'react'
import "./PlayField.scss"

export default function PlayField(props) {
  const NDeck = props.NDeck;
  const EDeck = props.EDeck;
  const SDeck = props.SDeck;
  const WDeck = props.WDeck;
  const setNDeck = props.setNDeck;
  const setEDeck = props.setEDeck;
  const setSDeck = props.setSDeck;
  const setWDeck = props.setWDeck;
  const playerSelectedCard = props.playerSelectedCard;
  const setPlayerSelectedCard = props.setPlayerSelectedCard;
  const player1Hand = props.player1Hand;
  const player2Hand = props.player2Hand;
  const onClickUserCard = props.onClickUserCard;
  const indexOfCard = props.indexOfCard;
  const TLKing = props.TLKing;
  const TRKing = props.TRKing;
  const BRKing = props.BRKing;
  const BLKing = props.BLKing;
  const setTLKing = props.setTLKing;
  const setTRKing = props.setTRKing;
  const setBRKing = props.setBRKing;
  const setBLKing = props.setBLKing;
  const onClickKing = props.onClickKing;
  const checkPlayer = props.checkPlayer;
  const currentPlayer = props.currentPlayer;
  const validateValue = props.validateValue;
  const deckDraw = props.deckDraw;
  const [playerSelectedDeck, setPlayerSelectedDeck] = useState([])
  const [currentDeckClass, setCurrentDeckClass] = useState([])

  const placeCardOnDeck = (data) => { // What happens when someone clicks on a NESW deck
    let lastCard;
    const classListWithDeck = data.target.className;

    if (playerSelectedCard.length > 0) {
      if (classListWithDeck.includes('NDeck')) {
        lastCard = NDeck.length - 1;
        if (validateValue(playerSelectedCard, NDeck[lastCard]) === true) {
          setNDeck(oldArray => oldArray.concat(playerSelectedCard))
          setPlayerSelectedCard([]);
          checkPlayer().splice(indexOfCard, 1)
        } else if (validateValue(playerSelectedCard, NDeck[lastCard]) === false) {
          setPlayerSelectedCard([])
          console.log("Card can't go there")
        } else { //? Delete and turn into else if? For all 4 code blocks
          console.log("something went wrong")
        }
      } else if (classListWithDeck.includes("EDeck")) {
        lastCard = EDeck.length - 1;
        if (validateValue(playerSelectedCard, EDeck[lastCard]) === true) {
          setEDeck(oldArray => oldArray.concat(playerSelectedCard));
          setPlayerSelectedCard([]);
          checkPlayer().splice(indexOfCard, 1)
        } else if (validateValue(playerSelectedCard, EDeck[lastCard]) === false) {
          setPlayerSelectedCard([])
          console.log("Card can't go there")
        } else {
          console.log("something went wrong") //?
        }
      } else if (classListWithDeck.includes("SDeck")) {
        lastCard = SDeck.length - 1;
        if (validateValue(playerSelectedCard, SDeck[lastCard]) === true) {
          setSDeck(oldArray => oldArray.concat(playerSelectedCard));
          setPlayerSelectedCard([]);
          checkPlayer().splice(indexOfCard, 1)
        } else if (validateValue(playerSelectedCard, SDeck[lastCard]) === false) {
          setPlayerSelectedCard([])
          console.log("Card can't go there")
        } else {
          console.log("something went wrong") //?
        }
      } else if (classListWithDeck.includes("WDeck")) {
        lastCard = WDeck.length - 1;
        if (validateValue(playerSelectedCard, WDeck[lastCard]) === true) {
          setWDeck(oldArray => oldArray.concat(playerSelectedCard));
          setPlayerSelectedCard([]);
          checkPlayer().splice(indexOfCard, 1)
        } else if (validateValue(playerSelectedCard, SDeck[lastCard]) === false) {
          setPlayerSelectedCard([])
          console.log("Card can't go there")
        } else {
          console.log("something went wrong") //?
        }
      } else {
        console.log("N", NDeck)
        console.log("E", EDeck)
        console.log("S", SDeck)
        console.log("W", WDeck)
      }
    } else { //!!!TODO!!!!
      // let currentDeckClass="NDeck";
      if (data.target.className.includes("NDeck")) { // Allows us to select the NESW Decks, priming it for moving
        setPlayerSelectedDeck(NDeck)
        setCurrentDeckClass("NDeck")
      } else if (data.target.className.includes("EDeck")) {// Allows us to select the NESW Decks, priming it for moving
        setPlayerSelectedDeck(EDeck)
        setCurrentDeckClass("EDeck")
      } else if (data.target.className.includes("SDeck")) {// Allows us to select the NESW Decks, priming it for moving
        setPlayerSelectedDeck(SDeck)
        setCurrentDeckClass("SDeck")
      } else if (data.target.className.includes("WDeck")) {// Allows us to select the NESW Decks, priming it for moving
        setPlayerSelectedDeck(WDeck)
        setCurrentDeckClass("WDeck")
      } else {
        console.log("No Deck")
      }
      if (playerSelectedDeck.length > 0) { // Once we have selected a deck to move
        if (classListWithDeck.includes('EDeck')) { // If we are trying to move playerSelectedDeck to the EDeck
          lastCard = EDeck.length - 1;
          // console.log("CDC", currentDeckClass)
          if (validateValue(playerSelectedDeck, EDeck[lastCard]) === true) { // code to make sure moving deck is a valid move
            console.log(currentDeckClass)
            if (currentDeckClass === "NDeck") {
              setNDeck([])
            } else if (currentDeckClass === "EDeck") {
              console.log("Can't move to same spot")
            } else if (currentDeckClass === "SDeck") {
              setSDeck([]);
            } else if (currentDeckClass === "WDeck") {
              setWDeck([]);
            }
            setEDeck(oldArray => oldArray.concat(playerSelectedDeck));
            setPlayerSelectedDeck([]);
          } else {
            (console.log("Card can't go there"))  // code for next array
          }
        } else if (classListWithDeck.includes('SDeck')){ // If we are trying to move playerSelectedDeck to the SDeck
          lastCard = SDeck.length - 1;
          if(validateValue(playerSelectedDeck, SDeck[lastCard]) === true){
            if (currentDeckClass === "NDeck") {
              setNDeck([])
            } else if (currentDeckClass === "EDeck") {
              setEDeck([])
            } else if (currentDeckClass === "SDeck") {
              console.log("Same deck, same spot")
            } else if (currentDeckClass === "WDeck") {
              setWDeck([]);
            }
            setSDeck(oldArray => oldArray.concat(playerSelectedDeck));
            setPlayerSelectedDeck([]);
          } else {
            (console.log("Card can't go there")) 
          }
        }
      } // End of "PSD is > 0"
    }
  }


  return (
    <div className='playfield-container'>
      {NDeck.map((card, index) => (
        <div onClick={placeCardOnDeck} key={index} className="starter-card card-0 NDeck">
          <div className={`deckCard ${card.value}-${card.suit}`}>
            <span>{card.value} {card.suit}</span>
          </div>
        </div>
      ))}
      {EDeck.map((card, index) => (
        <div onClick={placeCardOnDeck} key={index} className="starter-card card-1 EDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {SDeck.map((card, index) => (
        <div onClick={placeCardOnDeck} key={index} className="starter-card card-2 SDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {WDeck.map((card, index) => (
        <div onClick={placeCardOnDeck} key={index} className="starter-card card-3 WDeck">
          {card.value} {card.suit}
        </div>
      ))}

      {NDeck.length < 1 && <div className='setup-spot starter-card card-0'>Empty</div>}
      {EDeck.length < 1 && <div className='setup-spot starter-card card-1'>Empty</div>}
      {SDeck.length < 1 && <div className='setup-spot starter-card card-2'>Empty</div>}
      {WDeck.length < 1 && <div className='setup-spot starter-card card-3'>Empty</div>}

      <div onClick={deckDraw} className="deck">Deck</div>
      {TLKing.map((card, index) => (
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-0 TLKing">
          {card.value} {card.suit}
        </div>
      ))}
      {TRKing.map((card, index) => (
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-1 TRKing">
          {card.value} {card.suit}
        </div>
      ))}
      {BRKing.map((card, index) => (
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-2 BRKing">
          {card.value} {card.suit}
        </div>
      ))}
      {BLKing.map((card, index) => (
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-3 BLKing">
          {card.value} {card.suit}
        </div>
      ))}
      {/* {TLKing.length === 0 && <div className="starter-card card-king setup-king king-0">King goes here</div>}
      {TRKing.length === 0 && <div className="starter-card card-king setup-king king-1">King goes here</div>}
      {BRKing.length === 0 && <div className="starter-card card-king setup-king king-2">King goes here</div>}
      {BLKing.length === 0 && <div className="starter-card card-king setup-king king-3">King goes here</div>} */}
      {/* <div className="starter-card card-king setup-king king-0">King goes here</div>
      <div className="starter-card card-king setup-king king-1">King goes here</div>
      <div className="starter-card card-king setup-king king-2">King goes here</div>
      <div className="starter-card card-king setup-king king-3">King goes here</div> */}
    </div>
  )
}
