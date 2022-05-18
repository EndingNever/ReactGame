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
  const indexOfCard = props.indexOfCard;
  // const TLKing = props.TLKing;
  // const TRKing = props.TRKing;
  // const BRKing = props.BRKing;
  // const BLKing = props.BLKing;
  const [TLKing, setTLKing] = useState([{ value: "" }])
  const [TRKing, setTRKing] = useState([{ value: "" }])
  const [BRKing, setBRKing] = useState([{ value: "" }])
  const [BLKing, setBLKing] = useState([{ value: "" }])
  // const onClickKing = props.onClickKing;
  const checkPlayer = props.checkPlayer;
  const validateValue = props.validateValue;
  const deckDraw = props.deckDraw;
  const playerSelectedDeck = props.playerSelectedDeck;
  const setPlayerSelectedDeck = props.setPlayerSelectedDeck;
  const [currentDeckClass, setCurrentDeckClass] = useState([]);

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
        console.log("EDeck")
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
          if (validateValue(playerSelectedDeck, EDeck[lastCard]) === true) { // code to make sure moving deck is a valid move
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
        } else if (classListWithDeck.includes('SDeck')) { // If we are trying to move playerSelectedDeck to the SDeck
          lastCard = SDeck.length - 1;
          console.log("Sdeck")
          if (validateValue(playerSelectedDeck, SDeck[lastCard]) === true) {
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
        } else if (classListWithDeck.includes('WDeck')) { // If we are trying to move playerSelectedDeck to the WDeck
          lastCard = WDeck.length - 1;
          if (validateValue(playerSelectedDeck, WDeck[lastCard]) === true) {
            if (currentDeckClass === "NDeck") {
              setNDeck([])
            } else if (currentDeckClass === "EDeck") {
              setEDeck([])
            } else if (currentDeckClass === "SDeck") {
              setSDeck([])
            } else if (currentDeckClass === "WDeck") {
              console.log("Same deck, same spot")
            }
            setWDeck(oldArray => oldArray.concat(playerSelectedDeck));
            setPlayerSelectedDeck([]);
          } else {
            (console.log("Card can't go there"))
          }
        } else if (classListWithDeck.includes('NDeck')) { // If we are trying to move playerSelectedDeck to the NDeck
          lastCard = NDeck.length - 1;
          if (validateValue(playerSelectedDeck, NDeck[lastCard]) === true) {
            if (currentDeckClass === "NDeck") {
              console.log("Same deck, same spot")
            } else if (currentDeckClass === "EDeck") {
              setEDeck([])
            } else if (currentDeckClass === "SDeck") {
              setSDeck([])
            } else if (currentDeckClass === "WDeck") {
              setWDeck([])
            }
            setNDeck(oldArray => oldArray.concat(playerSelectedDeck));
            setPlayerSelectedDeck([]);
          } else {
            (console.log("Card can't go there"))
          }
        }
      } // End of "PSD is > 0"
    }
  }

  const checkCurrentDeck = () => {
    if (currentDeckClass.length > 0) {
      if (currentDeckClass === "NDeck") {
        setNDeck([])
      } else if (currentDeckClass === "EDeck") {
        setEDeck([])
      } else if (currentDeckClass === "SDeck") {
        setSDeck([])
      } else if (currentDeckClass === "WDeck") {
        setWDeck([])
      } else {
        console.log("NO Deck")
      }
      setPlayerSelectedDeck([])
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
        } else if (playerSelectedDeck.length > 0) { // Code for moving the first King from a deck rather than player hand
          if (playerSelectedDeck[0].value === "K") {
            setTLKing(playerSelectedDeck)
            checkCurrentDeck();
          }
        }
        else {
          console.log('playerSelectedCard, and playerSelectedDeck is empty')
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
        } else if (playerSelectedDeck.length > 0) {
          if (validateValue(playerSelectedDeck, TLKing[lastCard]) === true) {
            setTLKing(oldArray => oldArray.concat(playerSelectedDeck));
            checkCurrentDeck();
          }
        } else {
          console.log("PSC and PSD empty")
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
        } else if (playerSelectedDeck.length > 0) { // Code for moving the first King from a deck rather than player hand
          if (playerSelectedDeck[0].value === "K") {
            setTRKing(playerSelectedDeck)
            checkCurrentDeck();
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
        } else if (playerSelectedDeck.length > 0) {
          if (validateValue(playerSelectedDeck, TRKing[lastCard]) === true) {
            setTRKing(oldArray => oldArray.concat(playerSelectedDeck));
            checkCurrentDeck();
          }
        } else {
          console.log("PSC and PSD empty")
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
        } else if (playerSelectedDeck.length > 0) { // Code for moving the first King from a deck rather than player hand
          if (playerSelectedDeck[0].value === "K") {
            setBRKing(playerSelectedDeck)
            checkCurrentDeck();
          }
        } else {
          console.log("PSC and PSD empty")
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
        } else if (playerSelectedDeck.length > 0) {
          if (validateValue(playerSelectedDeck, BRKing[lastCard]) === true) {
            setBRKing(oldArray => oldArray.concat(playerSelectedDeck));
            checkCurrentDeck();
          }
        } else {
          console.log("PSC and PSD empty")
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
        } else if (playerSelectedDeck.length > 0) { // Code for moving the first King from a deck rather than player hand
          if (playerSelectedDeck[0].value === "K") {
            setBLKing(playerSelectedDeck)
            checkCurrentDeck();
          }
        } else {
          console.log("PSC and PSD empty")
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
        } else if (playerSelectedDeck.length > 0) {
          if (validateValue(playerSelectedDeck, BLKing[lastCard]) === true) {
            setBLKing(oldArray => oldArray.concat(playerSelectedDeck));
            checkCurrentDeck();
          }
        } else {
          console.log("PSC is empty")
        }
      }
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

      {NDeck.length < 1 && <div onClick={placeCardOnDeck} className='setup-spot starter-card card-0 NDeck'>Empty</div>}
      {EDeck.length < 1 && <div onClick={placeCardOnDeck} className='setup-spot starter-card card-1 EDeck'>Empty</div>}
      {SDeck.length < 1 && <div onClick={placeCardOnDeck} className='setup-spot starter-card card-2 SDeck'>Empty</div>}
      {WDeck.length < 1 && <div onClick={placeCardOnDeck} className='setup-spot starter-card card-3 WDeck'>Empty</div>}

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
    </div>
  )
}
