import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

function App() {



  return (

    <div className="">

      {/* iteration 1 */}


      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr />
      {/* iteration 2 */}


      <div className="container">
        <Greetings lang="de">Ludwig</Greetings>
      </div>

      <div className="container">
        <Greetings lang="fr">François</Greetings>
      </div>
      <div className="container">
        <Greetings lang="en">François</Greetings>
      </div>
      <div className="container">
        <Greetings lang="es">Dani</Greetings>
      </div>

      {/* iteration 3 */}

      <div className="container">
        <Random min={1} max={6} />
      </div>
      <div className="container">
        <Random min={1} max={100} />
      </div>
      <hr />
      {/* iteration 4 */}

      <div>
        <BoxColor r={55} g={100} b={250} />
      </div>

      <div >
        <BoxColor r={128} g={255} b={0} />
      </div>
      <hr />

      {/* iteration 5 */}

      <div className='cardContainer'>
        <div className="card1">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
          // bgColor="#11aa99"
          // color="white" 
          />
        </div>

        <div className="card2">
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
          // bgColor="#eeeeee"
          // color="#222222"
          />
        </div>

        <div className="card3">
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
          // bgColor="#ddbb55"
          // color="white" 
          />
        </div>
      </div>
      <hr />
      {/* iteration 6  */}
      <p>Rating</p>

      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <hr />

      {/* iteration 7 */}

      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />

      </div>

      <hr />
      {/* iteration 8 */}

      <LikeButton />

      <hr />
      <br />
      {/* interation 9 */}

      <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png' />

      <hr />
      <br />

      {/* interation 10 */}

      <Dice />


      <hr />
      <br />

    </div>

  );
}

export default App;
