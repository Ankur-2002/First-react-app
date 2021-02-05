import React from "react";

const Contact =()=>{

    

   return (
    <>
    <div className=" container-fluid">
    <div className=" row">
    <div className=" col-md-6 mx-auto text-center ">
    <div className=" mt-5 mb-2">
    <h1 >Contact Us</h1>
    </div>

    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Name : </span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>


<div class="input-group mb-3">
  <span class="input-group-text">Contact No .</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
  
</div>


<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>

    <div className=" mt-4">   
    <button  className="btn btn-outline-success" type="button"> Submit </button>
    </div>

    </div>
    </div>

    </div>


    </>
    );
    
    }

export default Contact;