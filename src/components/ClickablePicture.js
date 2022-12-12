import React from 'react';
import { useState } from 'react';

const ClickablePicture = (props) => {

    const [picture, setPicture] = useState(props.img)

    

    return (
        <div>
            
            <img src={picture} alt='pictures'   onClick={() =>{setPicture(props.imgClicked)}}/>
            
        </div>
    );
}

export default ClickablePicture;
