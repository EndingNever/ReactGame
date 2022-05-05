import React from 'react'
import "./PlayerCards.scss"

export default function PlayerCards(props) {
  const player1Hand = props.player1Hand;
  const player2Hand = props.player2Hand;

  const onClickCard = (data) => {
    console.log(data);
    // console.log(data.target.__reactProps$tmf8s111wfa.children[2]); // This shows us the children of the element we click as an array (example would be ['Q', ' ', 'spades' ])
    // console.log(data.target.innerHTML);
  }

  return (
    <div className='playerCards-container'>
      <div className="allPlayers player1">
        <p>Player 1 has {player1Hand.length} cards</p>
        {player1Hand.length > 1 && player1Hand.map((card, index) => (
          <>
            <div onClick={onClickCard} className='card-holder' key={index}>
              <p>
                {card.value} 
              {/* </p>
              <p> */}
                {card.suit}
              </p>
            </div>
          </>
        ))}
      </div>
      <div className="allPlayers player2">
        <p>Player 2 has {player2Hand.length} cards</p>
        {player2Hand.length > 1 && player2Hand.map((card, index) => (
          <>
            <div onClick={onClickCard} className='card-holder' key={index}>
              <p>
                {card.value} {card.suit}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
