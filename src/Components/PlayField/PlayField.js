import React from 'react'
import "./PlayField.scss"

export default function PlayField(props) {
  const NDeck = props.NDeck;
  const EDeck = props.EDeck;
  const SDeck = props.SDeck;
  const WDeck = props.WDeck;
  const setNDeck = props.setNDeck;
  const setEDeck = props.setEDeck;
  const setSDeck = props.setSDeck;
  const setWDeck = props.setWDeck;
  const playerSelectedCard = props.playerSelectedCard;
  const setPlayerSelectedCard = props.setPlayerSelectedCard;
  const player1Hand = props.player1Hand;
  const player2Hand = props.player2Hand;
  const onClickUserCard = props.onClickUserCard;
  const indexOfCard = props.indexOfCard;
  const TLKing = props.TLKing;
  const TRKing = props.TRKing;
  const BRKing = props.BRKing;
  const BLKing = props.BLKing;
  const setTLKing=props.setTLKing;
  const setTRKing=props.setTRKing;
  const setBRKing=props.setBRKing;
  const setBLKing=props.setBLKing;
  const onClickKing=props.onClickKing;
  const currentPlayer= props.currentPlayer 

  const checkPlayer = () => {
    if (currentPlayer=="Player 1"){
      return player1Hand;
    } else if (currentPlayer=="Player 2"){
      return player2Hand;
    }
  }

  const onPlaceCard = (data) => {
    const classListWithDeck = data.target.classList[2];
    let lastCard;
    if (playerSelectedCard.length > 0) {
      console.log(data.target.innerHTML);
      if (classListWithDeck == "NDeck") {
        lastCard=NDeck.length-1;
        setNDeck(oldArray => oldArray.concat(playerSelectedCard))
        setPlayerSelectedCard([]);
        checkPlayer().splice(indexOfCard, 1)
        console.log(NDeck);
      } else if (classListWithDeck == "EDeck") {
        lastCard=EDeck.length-1;
        setEDeck(oldArray => oldArray.concat(playerSelectedCard));
        setPlayerSelectedCard([]);
        checkPlayer().splice(indexOfCard, 1)
        console.log(EDeck);
      } else if (classListWithDeck == "SDeck") {
        lastCard=SDeck.length-1;
        setSDeck(oldArray => oldArray.concat(playerSelectedCard));
        setPlayerSelectedCard([]);
        checkPlayer().splice(indexOfCard, 1)
        console.log(SDeck);
      } else if (classListWithDeck == "WDeck") {
        lastCard=WDeck.length-1;
        setWDeck(oldArray => oldArray.concat(playerSelectedCard));
        setPlayerSelectedCard([]);
        checkPlayer().splice(indexOfCard, 1)
        console.log(WDeck);
      }
    } else {
      // console.log("PSC IS LESS THAN 0")
      // console.log(data);
      console.log(NDeck)
      console.log(EDeck)
      console.log(SDeck)
      console.log(WDeck)
    }
  }



  return (
    <div className='playfield-container'>
      {NDeck.map((card, index) => (
        <div onClick={onPlaceCard} key={index} className="starter-card card-0 NDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {EDeck.map((card, index) => (
        <div onClick={onPlaceCard} key={index} className="starter-card card-1 EDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {SDeck.map((card, index) => (
        <div onClick={onPlaceCard} key={index} className="starter-card card-2 SDeck">
          {card.value} {card.suit}
        </div>
      ))}
      {WDeck.map((card, index) => (
        <div onClick={onPlaceCard} key={index} className="starter-card card-3 WDeck">
          {card.value} {card.suit}
        </div>
      ))}

      {/* {setupCards.map((card, index) => (
        <>
          <div value={card.value} className={`starter-card card-${index}`} >{card.value}</div>
        </>
      ))}*/}
      {NDeck.length < 1 &&
        <>
          <div className="setup-spot starter-card card-0">Empty</div>
          <div className="setup-spot starter-card card-1">Empty</div>
          <div className="setup-spot starter-card card-2">Empty</div>
          <div className="setup-spot starter-card card-3">Empty</div>
        </>
      }
      <div className="deck">Deck</div>
      {TLKing.map((card, index)=>(
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-0 TLKing">
          {card.value} {card.suit}
        </div>
      ))}
      {TRKing.map((card, index)=>(
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-1 TRKing">
          {card.value} {card.suit}
        </div>
      ))}
      {BRKing.map((card, index)=>(
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-2 BRKing">
          {card.value} {card.suit}
        </div>
      ))}
      {BLKing.map((card, index)=>(
        <div onClick={onClickKing} key={index} className="starter-card card-king setup-king king-3 BLKing">
          {card.value} {card.suit}
        </div>
      ))}
      {/* {TLKing.length === 0 && <div className="starter-card card-king setup-king king-0">King goes here</div>}
      {TRKing.length === 0 && <div className="starter-card card-king setup-king king-1">King goes here</div>}
      {BRKing.length === 0 && <div className="starter-card card-king setup-king king-2">King goes here</div>}
      {BLKing.length === 0 && <div className="starter-card card-king setup-king king-3">King goes here</div>} */}
      {/* <div className="starter-card card-king setup-king king-0">King goes here</div>
      <div className="starter-card card-king setup-king king-1">King goes here</div>
      <div className="starter-card card-king setup-king king-2">King goes here</div>
      <div className="starter-card card-king setup-king king-3">King goes here</div> */}
    </div>
  )
}
