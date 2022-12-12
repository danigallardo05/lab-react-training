function Greetings (props) {
   
    if (props.lang === "de"){
    return <p>Hallo <span>{props.children}</span></p>
   } else if (props.lang === 'fr'){
    return <p>Bonjour <span>{props.children}</span></p>
   } else if (props.lang === 'en'){
    return <p>Hello <span>{props.children}</span></p>
   }else if (props.lang === "es") {
    return <p>Hola <span>{props.children}</span></p>
   }

}

export default Greetings