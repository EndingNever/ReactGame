import React from 'react'
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

  // console.log(NDeck)

  const onClickDeck = (data) => {
    const classListWithDeck = data.target.classList[2];
    if (playerSelectedCard.length > 0) {
      if (classListWithDeck == "NDeck") {
        setNDeck(oldArray => oldArray.concat(playerSelectedCard))
        setPlayerSelectedCard([]);
        // console.log(player1Hand.find(x => x.value===playerSelectedCard));
      } else if (classListWithDeck == "EDeck") {
        setEDeck(oldArray => oldArray.concat(playerSelectedCard));
        setPlayerSelectedCard([]);
        console.log(EDeck);
      } else if (classListWithDeck == "SDeck") {
        setSDeck(oldArray => oldArray.concat(playerSelectedCard));
        setPlayerSelectedCard([]);
        console.log(SDeck);
      } else if (classListWithDeck == "WDeck") {
        setWDeck(oldArray => oldArray.concat(playerSelectedCard));
        setPlayerSelectedCard([]);
        console.log(WDeck);
      }
    } else{
      console.log("PSC IS LESS THAN 0")
    }
  }


  return (
    <div className='playfield-container'>
      {NDeck.map((card, index) => (
        <div onClick={onClickDeck} key={index} className="starter-card card-0 NDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {EDeck.map((card, index) => (
        <div onClick={onClickDeck} key={index} className="starter-card card-1 EDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {SDeck.map((card, index) => (
        <div onClick={onClickDeck} key={index} className="starter-card card-2 SDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {WDeck.map((card, index) => (
        <div onClick={onClickDeck} key={index} className="starter-card card-3 WDeck">
          {card.value} {card.suit}
        </div>
      ))}

      {/* {setupCards.map((card, index) => (
        <>
          <div value={card.value} className={`starter-card card-${index}`} >{card.value}</div>
        </>
      ))}*/}
      {NDeck.length < 1 &&
        <>
          <div className="setup-spot starter-card card-0">Empty</div>
          <div className="setup-spot starter-card card-1">Empty</div>
          <div className="setup-spot starter-card card-2">Empty</div>
          <div className="setup-spot starter-card card-3">Empty</div>
        </>
      }
      <div className="deck">Deck</div>
      <div className="starter-card card-king setup-king king-0">King goes here</div>
      <div className="starter-card card-king setup-king king-1">King goes here</div>
      <div className="starter-card card-king setup-king king-2">King goes here</div>
      <div className="starter-card card-king setup-king king-3">King goes here</div>
    </div>
  )
}
