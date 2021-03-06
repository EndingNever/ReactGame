import './App.css';
import React, { useState, useEffect } from 'react';
import Deck from './Components/Deck/Deck';
import Die from './Components/Die/Die';

function App() {
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

  let deck = new Array();

  const getDeck = () => {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { value: values[x], suit: suits[i] };
        deck.push(card);
      }
    }
  }

  const shuffleDeck = () => {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * deck.length));
      let location2 = Math.floor((Math.random() * deck.length));
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }

  useEffect(() => {
    getDeck();
    shuffleDeck();
  }, [])
  console.log(deck)

  return (
    <div className="App">
      <Deck deck={deck}
        getDeck={getDeck}
        shuffleDeck={shuffleDeck}
      />
    </div>
  );
}

export default App;

// Created deck and shuffle ability
// Created player 1 and player 2 hands
// Created Arrays for NESW Decks
// Functionality for pushing ANY card to ANY array
// Created 4 King Arrays and pushing to those
// Verifying that only a King can be pushed to King Arrays
// Flexing that verification into the NESW Arrays  
// Start Game, deal cards, deal players
// Change Player Turn functionality
// Player can Draw card from deck
// Player MUST draw card from deck before ending turn
//! Allow player to move whole decks NESW, to Kings location in corner