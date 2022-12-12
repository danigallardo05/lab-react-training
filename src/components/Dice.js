import React from 'react';
import EmptyDice from '../assets/images/dice-empty.png'
import Dice1 from '../assets/images/dice1.png'
import Dice2 from '../assets/images/dice2.png'
import Dice3 from '../assets/images/dice3.png'
import Dice4 from '../assets/images/dice4.png'
import Dice5 from '../assets/images/dice5.png'
import Dice6 from '../assets/images/dice6.png'
import { useState, useEffect } from 'react';


const Dice = () => {

    const [dice, setDice] = useState(EmptyDice)


    const randomDice = () => {

        const diceArr = [ Dice1 , Dice2 ,  Dice3 ,  Dice4 ,  Dice5 ,  Dice6]
        const randomDiceIndex = Math.floor(Math.random() * diceArr.length)
        
        console.log('this is the array and after the random number', diceArr, randomDiceIndex)
        console.log(diceArr[randomDiceIndex])
    
        setTimeout(() => {
            setDice(diceArr[randomDiceIndex])
        }, 1000)
       
    }

    return (
        <div>
            
            <img src={dice} alt='dice' className='dice' onClick={randomDice} />

        </div>
    );
}

export default Dice;
