import React from 'react';

const Rating = (props) => {

    let fullStar = '★' 
    let emptyStar = '☆'

    let stars = fullStar.repeat((Math.round(props.children))) + emptyStar.repeat((5 - Math.round(props.children)))

    return (
        <div>
            <p>{stars}</p>
        </div>
    );
}

export default Rating;
