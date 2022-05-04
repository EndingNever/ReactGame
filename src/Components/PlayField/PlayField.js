import React from 'react'
import "./PlayField.scss"

export default function PlayField(props) {
  const setupCards = props.setupCards;

  return (
    <div className='playfield-container'>
      {setupCards.map((card,index)=>(
        <>
<div className={`starter-card card-${index}`} >{card.value}</div>
{/* <div className="starter-card card-E">{card.value}</div> */}
{/* <div className="starter-card card-S"></div> */}
{/* <div className="starter-card card-W"></div> */}
        </>
      ))}
      <div className="deck">Deck</div>
    </div>
  )
}
