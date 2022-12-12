import React from 'react';
import { useState } from 'react';


const LikeButton = () => {

    const [number, setNumber] = useState(0)

    // let count = 0

    const clickFunction =() => {
        console.log('click works')
        setNumber(number + 1)
    }


    return (
        <div className='divButton'>
            <button className='button' onClick={clickFunction}>{number} Like</button>
        </div>
    );
}

export default LikeButton;
