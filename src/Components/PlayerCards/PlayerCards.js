import React from 'react'
import "./PlayerCards.scss"

export default function PlayerCards(props) {
  const player1Hand = props.player1Hand;
  const player2Hand = props.player2Hand;
  const playerSelectedCard = props.playerSelectedCard;
  const setPlayerSelectedCard = props.setPlayerSelectedCard;
  const onClickUserCard=props.onClickUserCard;

  // const onClickUserCard = (data) => {
  //   const cardValue = data.target.childNodes[0].data;
  //   const cardSuit = data.target.childNodes[2].data;
  //   const valueFound = player1Hand.find(x => x.value === cardValue && x.suit === cardSuit) //this will search through player1Hand and find the location of x.value === "K" (x.suit also available)
  //   // console.log(player1Hand.indexOf(data.target.innerHTML))
  //   // console.log(player1Hand.indexOf(valueFound)) // logs index of the clicked card in player 1 hand
  //   const indexOfCard = player1Hand.indexOf(valueFound)
  //   const slice = player1Hand.slice(indexOfCard, indexOfCard+1);
  //   if (playerSelectedCard.length < 1) {
  //     setPlayerSelectedCard(slice)
  //     // console.log(player1Hand.splice(indexOfCard, indexOfCard+1));
  //   } else{
  //     console.log('playerSelectedCard has 1 card already');
  //   }
  //   //? console.log(player1Hand.indexOf(found)); // This will display the indexOf any Kings we have in our player1hand
  //   //? const suitFound = player1Hand.find(x => x.suit === cardSuit) //this will search through player1Hand and find the location of x.value === "K" (x.suit also available)
  //   //? console.log(data.target.childNodes[0].data); // Value
  //   //? console.log(data.target.childNodes[2].data); // Suit
  //   //? setPlayerSelectedCard(data.target.innerHTML)
  // }


  return (
    <div className='playerCards-container'>
      <div className="allPlayers player1">
        <p>Player 1 has {player1Hand.length} cards</p>
        {player1Hand.length > 1 && player1Hand.map((card, index) => (
          <>
            <div className='card-holder' key={index}>
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
            <div className='card-holder' key={index}>
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
