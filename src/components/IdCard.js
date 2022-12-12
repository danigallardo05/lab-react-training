function IdCard(props) {
    return (
        <div className="container">

            <div className="picture"><img src={props.picture} alt="profileImage" /> </div>

            <div className="text">
                <p><b>First name: </b><span>{props.firstName}</span></p>
                <p><b>Last name: </b><span>{props.lastName}</span></p>
                <p><b>Gender: </b><span>{props.gender}</span></p>
                <p><b>Height: </b><span>{props.height}</span></p>
                <p><b>Birth: </b><span>{props.birth.toDateString()}</span></p>

            </div>
        </div>
    );
}

export default IdCard