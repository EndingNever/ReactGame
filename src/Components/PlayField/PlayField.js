import React from 'react'
import "./PlayField.scss"

export default function PlayField(props) {
  const setupCards = props.setupCards;
  const playerSelectedCard = props.playerSelectedCard

  return (
    <div className='playfield-container'>
      {setupCards.map((card, index) => (
        <>
          <div value={card.value} className={`starter-card card-${index}`} >{card.value}</div>
        </>
      ))}
      {setupCards.length < 1 &&
        <>
          <div className="setup-spot starter-card card-0">0</div>
          <div className="setup-spot starter-card card-1">1</div>
          <div className="setup-spot starter-card card-2">2</div>
          <div className="setup-spot starter-card card-3">3</div>
        </>
      }
      <div className="deck">Deck</div>
      <div className="starter-card card-king king-0">King goes here</div>
      <div className="starter-card card-king king-1">King goes here</div>
      <div className="starter-card card-king king-2">King goes here</div>
      <div className="starter-card card-king king-3">King goes here</div>
    </div>
  )
}
