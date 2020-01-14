import React from "react";

export const ListOrganization =(props)=>{
   return(
       <div>
           <h6>Registered Organizations</h6>

           {props.organization?props.organization.map((item)=><p className='organizationnName'>{item}</p>):''}
          
       </div>
   )
}