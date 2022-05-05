import React from 'react'
import "./PlayField.scss"

export default function PlayField(props) {
  const NDeck = props.NDeck;
  const EDeck = props.EDeck;
  const SDeck = props.SDeck;
  const WDeck = props.WDeck;

  const playerSelectedCard = props.playerSelectedCard
  return (
    <div className='playfield-container'>
      {NDeck.map((card, index) => (
        <div key={index} className="starter-card card-0">
          {card.value} {card.suit}
        </div>
      ))}
      {EDeck.map((card, index) => (
        <div key={index} className="starter-card card-1">
          {card.value} {card.suit}
        </div>
      ))}
      {SDeck.map((card, index) => (
        <div key={index} className="starter-card card-2">
          {card.value} {card.suit}
        </div>
      ))}
      {WDeck.map((card, index) => (
        <div key={index} className="starter-card card-3">
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
