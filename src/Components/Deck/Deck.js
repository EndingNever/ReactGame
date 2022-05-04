import React, { useEffect, useState } from 'react';
import PlayField from '../PlayField/PlayField';
import "./Deck.scss"

const Deck = (props) => {


  const deck = props.deck;
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const [setupCards, setSetupCards]=useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);

  // const deck = new Array();


  const dealPlayerHand = (deck) => {
    if (player1Hand.length < 1) {
      for (let i = 0; i < 7; i++) {
        const shift = deck.shift();
        setPlayer1Hand(oldArray => [...oldArray, shift]);
      }
    }
    if (player2Hand.length < 1) {
      for (let i = 0; i < 7; i++) {
        const shift = deck.shift();
        setPlayer2Hand(oldArray => [...oldArray, shift]);
      }
    }
  }

  const dealPlayer1 = () => {
    dealPlayerHand(deck);
  }

  const dealSetupCards = ()=>{
    for(let i = 0; i<4; i++) {
      const shift = deck.shift();
      setSetupCards(oldArray=>[...oldArray, shift]);
    }
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


  console.log(player1Hand)
  console.log(player2Hand)
console.log(setupCards)

  // getDeck();
  // shuffleDeck();
  return (
    <div className='deck-container'>
      <button onClick={() => console.log(deck.length)}>Check Deck</button>
      <button onClick={dealPlayer1}>PlayerHand</button>
      <button onClick={dealSetupCards}>Deal Setup</button>
     {/*  <p>The deck has {deck.length} cards</p>
      <p>Player 1 has {player1Hand.length} cards</p>
      {player1Hand.length > 1 && player1Hand.map((card, index) => (
        <>
          <div key={index}>
            <p>
              {card.value}
              {card.suit}
            </p>
          </div>
        </>
      ))}
      <p>Player 2 has {player2Hand.length} cards</p>
      {player2Hand.length > 1 && player2Hand.map((card, index) => (
        <>
          <div key={index}>
            <p>
              {card.value}
              {card.suit}
            </p>
          </div>
        </>
      ))}
      {setupCards.length} */}
      <PlayField setupCards={setupCards}/>
      {/* {props.deck.length > 0 ? props.deck.map((card, index)=>(  
        <div key={index}>
        {card.value}
        </div>
      )): null} */}

    </div>
  );
}

export default Deck;
