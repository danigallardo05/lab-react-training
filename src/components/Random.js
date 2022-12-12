function Random(props) {

    let randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min)

    return (
        <p>Random value between {props.min} and {props.max} = {randomNumber}</p>

    );
}

export default Random