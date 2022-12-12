import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {


    return (
        <div className='driverCard'>

           <img className='profile' src={props.img} alt='pic' />
           
           <div>
           <h3>{props.name}</h3>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
            
        </div>
    );
}

export default DriverCard;
