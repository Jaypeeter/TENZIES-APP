import React from 'react'
import './tenzies.css'
import Die from './die'
import {nanoid} from 'nanoid'
import Confetti from 'react-dom-confetti'


export default function Tenzies(){
 const [dice, setDice] = React.useState(allNewDice())
 const [tenzies, setTenzies] = React.useState(false)

 React.useEffect(() => {
     const allHeld = dice.every(die => die.isHeld)
     const firstValue = dice[0].value
     const allSameValue = dice.every(die => die.value === firstValue)
     if (allHeld && allSameValue){
         setTenzies(true)
         alert("You win")
     }


 }, [dice])


 function generateNewDie(){
     return {
        value:Math.ceil(Math.random()* 6), 
        isHeld: false,
        id: nanoid()}
 }



 function allNewDice(){
     const newDice = []
     for(let i = 0; i< 10; i++){
         newDice.push(
             generateNewDie()
         )
     }
     return newDice

 }

 function holdDice(id){
     setDice(oldDice => oldDice.map(die=>{
         return die.id === id ? 
            {...die, isHeld: !die.isHeld}:
            die
     })
)
 }


 function rollDice(){
     setDice(oldDice => oldDice.map(die => {
         return die.isHeld ? 
         die: 
         generateNewDie()

     }))
 }
  const diceElements = dice.map(die => 
    (<Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>))
    return(
        <body>
            <main>
            <Confetti active={tenzies}/>

                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
                <div className="container">
              {diceElements}
                </div>
                <br/>
                {tenzies? <form><button className="roll-dice">Reload</button></form> : <button className="roll-dice" onClick={rollDice}>Roll</button>}
                
            </main>
        </body>
    )
}