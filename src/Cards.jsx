import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards =(props)=>{
return (
<>
<div className=" col-md-4  col-10 mx-auto">
<div className="card" style={{width:"18rem"}}>
        <img src={props.img} className="card-img-top" alt="Photo not load" />
        <div className="card-body">
          <h5 className="card-title mt-1 font-weight-bold">{props.name}</h5>
          <p className="card-text">{props.price}</p>
           <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
         </div>
            </div>
            </div>
</>
);
}

export default Cards;