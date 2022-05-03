import React, { useState, useEffect, useRef } from 'react'
import "./Die.scss"

export default function Die() {

  const [lockRoll, setLockRoll] = useState(false)
  const [dieOne, setDieOne] = useState('');// Dice initialized to 0 
  const [dieTwo, setDieTwo] = useState('');// Dice initialized to 0 
  const [dieTotal, setDieTotal] = useState(0); // Dice1 + Dice2 Initialized at 0 
  const [win, setWin] = useState(false) // Win is false by default
  const [lose, setLose] = useState(false);
  const [firstRoll, setFirstRoll] = useState()

  const roll = () => {
    setDieOne(Math.floor(Math.random() * 6) + 1); // Rolls the dice, generates number between 1-6
    setDieTwo(Math.floor(Math.random() * 6) + 1); // Rolls the dice, generates number between 1-6
    if (dieTotal === 2 || dieTotal === 3 || dieTotal === 12) {
      console.log(dieTotal)
    }
  }

  const loseReset = () => {
    setLockRoll(false)
    setDieOne('');
    setDieTwo('');
    setLose(false);
  }

  const winReset = () => {
    setLockRoll(false)
    setDieOne('');
    setDieTwo('');
    setWin(false);
  }

  useEffect(()=>{
    
  }, [setWin, setLose])

  useEffect(() => {
    setDieTotal(dieOne + dieTwo)
    if (dieTotal === 2 || dieTotal === 3 || dieTotal === 12) {
      setLose(true);
      setLockRoll(true);
    }
    if (dieTotal === 7) { // Win Rules 
      setWin(true); // Win is True
      setLockRoll(true);
    } else if (dieTotal === 11) {
      setWin(true); // Win is True
      setLockRoll(true);
    } else {
      return;
    }
  }, [dieOne, dieTwo, dieTotal, win, lose])

  return (
    <div>
      <div className="diceContainer">
        <div className="die">
          {dieOne}
        </div>
        <div className="die">
          {dieTwo}
        </div>
      </div>
      <div className='rollContainer'>
        {!lockRoll && <button onClick={roll}>Roll</button>}
        <p>Roll: {dieTotal}</p>
        {win && <h1>WIN!</h1>}
        {win && <button onClick={winReset}>Reset!</button>}
        {lose && <h1>LOSER</h1>}
        {lose && <button onClick={loseReset}>LOSER</button>}
      </div>
    </div>
  )
}
