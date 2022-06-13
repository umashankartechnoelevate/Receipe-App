import React from "react";

function Receipelist(props) {

let passData=(val)=>{
    props.getData(val)
}

console.log("data from parent to list",props.receipeData);
  return (
    <div>
    {props.receipeData.map((val,idx)=>{
        return <div key={idx} className="card" style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{val.id}</li>
          <li className="list-group-item">{val.name}</li>
          <li><button onClick={()=>{passData(val)}}><img height="100%" width="100%" src={val.image} alt={val.name} /></button></li>
        </ul>
      </div>
    })}
    </div>
  );
}

export default Receipelist;


{/* <li><button onClick={()=>{passData(e)}}><img height="100%" width="100%" src="" alt="" /></button></li> */}