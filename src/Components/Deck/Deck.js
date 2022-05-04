import React, { useEffect } from 'react';
import "./Deck.scss"

const Deck = (props) => {


  const deck = props.deck;
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const player1Hand = [];
  const player2Hand = [];

  // const deck = new Array();

const dealPlayerHand = (deck, playerHand) => {
  for (let i = 0; i < 7;i++){
    const shift = deck.shift();
    playerHand.push(shift);
  }
  return playerHand
}

const dealPlayer1=()=>{
  dealPlayerHand(deck,player1Hand);
  console.log(player1Hand)
  console.log(deck);
}

  // const getDeck = () => {
  //   for (let i = 0; i < suits.length; i++) {
  //     for (let x = 0; x < values.length; x++) {
  //       let card = { value: values[x], suit: suits[i] };
  //       deck.push(card);
  //     }
  //   }
  // }

  // const shuffleDeck = () => {
  //   for (let i = 0; i < 1000; i++) {
  //     let location1 = Math.floor((Math.random() * deck.length));
  //     let location2 = Math.floor((Math.random() * deck.length));
  //     let tmp = deck[location1];

  //     deck[location1] = deck[location2];
  //     deck[location2] = tmp;
  //   }
  // }



  // getDeck();
  // shuffleDeck();
  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={dealPlayer1}>PlayerHand</button>
      <p>The deck has {deck.length} cards</p>
      <p>Player 1 has {player1Hand.length} cards</p>
       {/* {props.deck.length > 0 ? props.deck.map((card, index)=>(  
        <div key={index}>
        {card.value}
        </div>
      )): null} */}

    </div>
  );
}

export default Deck;
