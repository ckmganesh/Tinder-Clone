import React,{useState} from 'react';
import TinderCard from "react-tinder-card"
import './TinderCards.css'

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:'Elon Musk',
            url:"https://i.ibb.co/VVYCQdM/elonmusk.jpg"
        },
        {
            name:'Jeff Bezos',
            url:"https://i.ibb.co/NSbHhtK/jeffbezoz.jpg"
        }
    ]);
    const swiped = (direction,nameToDelete) =>{
        console.log("removing: "+nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame = (name)=>{
        console.log(name + "Left the screen");
    };
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
               <TinderCard
               className="swipe"
               key={person.name}
               preventSwipe={["up","down"]}
               onSwipe={(dir) => swiped(dir,person.name)}
               onCardLeftScreen={()=>outOfFrame(person.name)}>

                <div
                style ={{backgroundImage : "url("+person.url+")"}}
                className = "card"
                >
                    <h3>{person.name}</h3>
                </div>

               </TinderCard>

            ))}

            </div>
            
            
        </div>
    )
}

export default TinderCards
