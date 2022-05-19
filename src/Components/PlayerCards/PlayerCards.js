import React from 'react'
import "./PlayerCards.scss"

export default function PlayerCards(props) {
  const player1Hand = props.player1Hand;
  const player2Hand = props.player2Hand;
  const onClickUserCard=props.onClickUserCard;

  return (
    <div className='playerCards-container'>
      <div className="allPlayers player1">
        <p>Player 1 has {player1Hand.length} cards</p>
        {player1Hand.length > 0 && player1Hand.map((card, index) => (
          <div onClick={onClickUserCard}>
            <div className='card-holder' key={index}>
              <button  className='player1Cards' >
                <p className="player1Card">{card?.value} {card?.suit}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="allPlayers player2">
        <p>Player 2 has {player2Hand.length} cards</p>
        {player2Hand.length > 0 && player2Hand.map((card, index) => (
          <div onClick={onClickUserCard}>
            <div className='card-holder' key={index}>
              <button className='player1Cards' onClick={onClickUserCard}>
              <p className="player1Card">{card?.value} {card?.suit}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
