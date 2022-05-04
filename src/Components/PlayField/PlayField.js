import React from 'react'
import "./PlayField.scss"

export default function PlayField(props) {
  const setupCards = props.setupCards;

  return (
    <div className='playfield-container'>
      {setupCards.map((card, index) => (
        <>
          <div className={`starter-card card-${index}`} >{card.value}</div>
        </>
      ))}
      <div className="deck">Deck</div>
      <div className="card-king king-0">King</div>
      <div className="card-king king-1">King</div>
      <div className="card-king king-2">King</div>
      <div className="card-king king-3">King</div>
    </div>
  )
}
