// function BoxColor (props) {
//     //this is to generate a random rgb number 
//     // let min = 0;
//     // let max = 255;
//     // let r = Math.floor(Math.random() * (max - min + min))
//     // let g = Math.floor(Math.random() * (max - min + min))
//     // let b = Math.floor(Math.random() * (max - min + min))

//     const background ={
//         backgroundColor: `rgb( ${props.r}, ${props.g} , ${props.b})`
//     }
    
//     return (

//         <div style={background}>
//         <p> rgb= ({props.r},{props.g},{props.b})</p>
//         </div>
//     );
// }

// export default BoxColor

// this function is to add the hex code and convert from rgb to hex

function BoxColor(props){
    const rbgColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        padding:'50px'
    }

    function valueToHex(c){
        var hex = '0' + c.toString(16);
        return hex.slice(-2)
    }

    function rgbToHex(r, g, b){
        return(
            valueToHex(r) + valueToHex(g) + valueToHex(b)
        )
    }

    return(
        <div style={rbgColor}>
            <p>
                rgb({props.r}, {props.g}, {props.b})
                <p>#{rgbToHex(props.r, props.g, props.b)}</p>
            </p>
        </div>
    );
}

export default BoxColor;