import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const Letter = ({letterPos,attemptVal}) => {
    const {board,correctWord,currAttempt,disabledLetters,setDisabledLetters} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord[letterPos] === letter.toLowerCase();
    const almost = !correct && letter!=="" && correctWord.includes(letter.toLowerCase());

    const letterState = currAttempt.attempt > attemptVal &&
    (correct? "correct" : almost? "almost" : "error");

    useEffect(()=>{
      if(letter !== "" && !correct && !almost){
        setDisabledLetters((prev)=> [...prev,letter]);
      }
    },[currAttempt.attempt])

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter