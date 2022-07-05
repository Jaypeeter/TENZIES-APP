import React from 'react'
import './newdie.css'

export default function Newdie(props){
 const styles = {
     backgroundColor: props.isHeld? "green": "white"
 }



    return(
        <div className="newdie-div" style={styles}>
            <h2 className="newdie-text">{props.value}</h2>

        </div>
    )
}