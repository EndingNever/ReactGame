import React from 'react'
import "./PlayField.scss"

export default function PlayField(props) {
  const setupCards = props.setupCards;

  return (
    <div className='playfield-container'>
      {setupCards.map((card, index) => (
        <>
          <div value={card.value} className={`starter-card card-${index}`} >{card.value}</div>
        </>
      ))}
      <div className="deck">Deck</div>
      <div className="starter-card card-king king-0">King goes here</div>
      <div className="starter-card card-king king-1">King goes here</div>
      <div className="starter-card card-king king-2">King goes here</div>
      <div className="starter-card card-king king-3">King goes here</div>
    </div>
  )
}
