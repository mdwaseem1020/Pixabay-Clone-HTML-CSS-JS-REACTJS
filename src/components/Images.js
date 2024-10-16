import React from "react";
import { useNavigate } from "react-router-dom";

function Images ({src,alt,data}){
    let navigate=useNavigate()
    
    
        return (
            <>
            <div className="imgdiv">

                <img onClick={()=>navigate('/imagedetails',{state:{data}})} className="imgs" src={src}></img>
            </div>
            </>
        )
    
}
export  default Images;
