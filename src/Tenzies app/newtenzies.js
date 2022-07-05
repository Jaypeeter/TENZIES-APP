import React from "react";
import './newtenzies.css'
import Newdie from "./newdie";
import {nanoid} from 'nanoid'

export default function NewTenzies(){
 function createNewDie(){
     return{
         value: Math.ceil(Math.random()*6),
         isHeld: true,
         id: nanoid()
     }
 }
 const [dies, setDies] = React.useState(allNewText())
 function allNewText(){
     let selectedDie = []
     for(let i=0; i< 10; i++){
         selectedDie.push(createNewDie())
     }
     return selectedDie
 }

 function keepDie(id){
    setDies(oldDice => oldDice.map(die=>{
        return die.id === id ? 
           {...die, isHeld: !die.isHeld}:
           die
    })
)
}

 function rollDie(){
     setDies(oldDies => oldDies.map(newdie => {
         return newdie.isHeld ?
         dies : 
         createNewDie()
     }))
 }

   const newDieElements = dies.map(newdie => 
    (<Newdie value={newdie.value} id={newdie.id} isHeld={newdie.isHeld} keepDie={()=>keepDie(newdie.id)}/>))
   /*const diceElements = dice.map(die => 
    (<Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>))*/



    return(
        <div className="maindie">
            <div className="newdie-body">
            <div className="newdie-container">

            {newDieElements}
            </div>
            <button className="btn-dark die-button" onClick={rollDie}>Roll</button>
            </div>
        </div>
    )
}