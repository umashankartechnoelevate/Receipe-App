import React, { useState } from 'react'

function Receipedetails(props) {

console.log("data from another comp in details",props.dataFromAnotherComp);
    
  return (
    <div>
        {
       
         <div className="card" style={{width: "1000px", height:"1000px"}}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.dataFromAnotherComp.name}</li>
              <li className="list-group-item"><img height="100%" width="100%" src= {props.dataFromAnotherComp.image} alt={props.dataFromAnotherComp.name} /></li>
              <li className="list-group-item">{props.dataFromAnotherComp.title}</li>
              <li className="list-group-item">{props.dataFromAnotherComp.steps}</li>
            </ul>
            </div>
       }
    </div>
  )
}

export default Receipedetails