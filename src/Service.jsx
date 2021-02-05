import React from 'react';
import Cards from './Cards';
import Data from './Data';
const Service =()=>{
return (
<>    
<div className=" text-center mb-5">
    <h1>Services</h1>
</div>
<div className=" container-fluid mb-5">
    <div className=" row">
        <div className="col-10 mx-auto">
        <div className="row gy-5">
           {
               Data.map((val,id)=>{
                return ( <Cards 
                    img = {val.img}
                    key={id}
                    name = {val.val}
                    price = {val.price}
                    ></Cards>
                );
                })
           } 
        </div>

        
 


</div>
</div>
</div>
</>
);
}


export default Service;