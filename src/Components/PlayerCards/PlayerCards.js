import React from 'react'
import "./PlayerCards.scss"

export default function PlayerCards(props) {
  const player1Hand = props.player1Hand;
  const player2Hand = props.player2Hand;
  const playerSelectedCard = props.playerSelectedCard
  const setPlayerSelectedCard = props.setPlayerSelectedCard

  const onClickUserCard = (data) => {
    const found = player1Hand.find(x => x.value === "K") //this will search through player1Hand and find the location of x.value === "K" (x.suit also available)
    console.log(player1Hand.indexOf(found)); // This will display the indexOf any Kings we have in our player1hand
    // console.log(data.target.innerHTML);
    // setPlayerSelectedCard(data.target.innerHTML)
  }

  
  return (
    <div className='playerCards-container'>
      <div className="allPlayers player1">
        <p>Player 1 has {player1Hand.length} cards</p>
        {player1Hand.length > 1 && player1Hand.map((card, index) => (
          <>
            <div  className='card-holder' >
              <p onClick={onClickUserCard}>
                {card.value} {card.suit}
              </p>
            </div>
          </>
        ))}
      </div>
      <div className="allPlayers player2">
        <p>Player 2 has {player2Hand.length} cards</p>
        {player2Hand.length > 1 && player2Hand.map((card, index) => (
          <>
            <div  className='card-holder' key={index}>
              <p onClick={onClickUserCard}>
                {card.value} {card.suit}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
