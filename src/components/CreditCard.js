import visaLogo from '../assets/images/visa.png'
import mcLogo from '../assets/images/mastercard.png'

const CreditCard = (props) => {

    let cardImage;

    if( props.type == "Visa"){
        cardImage = visaLogo
    } else{
        cardImage = mcLogo
    }
    // cannot put if statements in JSX

    return (
        <div>
        <img src={cardImage} alt="card logo" className='cardLogo' />
            <p>{props.number}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            <p>{props.bgColor}</p>
            <p>{props.color}</p>
        </div>
    );
}

export default CreditCard;