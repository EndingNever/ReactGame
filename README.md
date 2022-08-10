# Kings Corner - A React Card Game

## Author
Fabian Villasenor - [LinkedIn](https://www.linkedin.com/in/fabianvillasenor/)

## Overview
This is a desktop game built in React and using a whole lot of Javascript. The challenge was to build a playable game where a player can win, lose or tie. Starting the game shuffles the deck and deals 7 cards to each player, as well as 4 foundation cards on the play field. 

The ranking of cards is K-Q-J-10-9-8-7-6-5-4-3-2-A

Cards must be placed in this order

### The Rules

  * Player 1 moves first
  * During their turn, players move cards from their hand to the play field
  * Players must draw a card before they end their turn
  * The player can only place a card on a card with a value that is one greater. For example, a player can take a "3" from their hand and ONLY place it on a "4" if present
  * Foundations will gather lots of cards, but only the most recently placed card is displayed
  * Foundations may move on top of each other, as long as the first card of one foundation can legally be placed on the last card of the other
  * When moving a foundation the player will see "Deck Selected: " followed by the value of the initial card for that stack. This is the value that can only be placed on a valid card. 
  * Moving a foundation leaves an empty space. The player may place a card from their hand in the newly empty spot.
  * If a player draws a card and has no valid moves, they must end their turn 
  * Kings can go in any of the 4 foundation spots, however....
  * Kings ultimately end up in the 4 corners, as no other cards are allowed there
  * When a King is in the corner, it can be built upon like the other cards
  * The goal is to remove all cards from your hand and place them in the field with legal moves. If a player has 0 cards, and has drawn from the deck, they win


### Screenshots
  Before the game starts, the decks are empty and players have zero cards
  
![pregame](https://user-images.githubusercontent.com/74066431/169392696-0fc2b9b4-9a45-4c9b-b76f-80bba1931af6.png)
  
  Game has started, four foundation cards are laid and players have 7 cards each
  
![gameStart](https://user-images.githubusercontent.com/74066431/169393008-ef519818-da17-4aa6-8b27-6dd528690a44.png)

  A valid move could result in an empty foundation. Players may place cards from their own hand on the field
  
![validMoves](https://user-images.githubusercontent.com/74066431/169393518-5e578290-a947-484a-8bd4-359bdf9b3525.png)
  
  Just before a win. Player 1 has zero cards, but could _possibly_ still need to draw from the deck. We see "deck has been drawn" signaling that the player will win when they end their turn. 
  
![prewin](https://user-images.githubusercontent.com/74066431/169393701-cf5a4d73-6639-4b71-980a-d12b96177835.png)
  The player successfully ended their turn, they already drew a card, and they had none left. Player 1 wins!
  
![winner](https://user-images.githubusercontent.com/74066431/169394291-03ccb411-09d4-4598-a236-d1f1223b6f8c.png)

### Built With
* React
* React useState Hooks
* Sass
* Javascript, especially array manipulation and if-else statements


