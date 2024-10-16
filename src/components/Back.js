import React, { useEffect, useState } from "react";
import Images from "./Images";
import Nav2 from "../components/Nav2";
function Back() {
   let [set,setstate]=useState('')
   let  [serch,setserch]=useState([])
    function fun(e){
        let val=setstate(e.target.value)
    }
    useEffect(()=>{
        let api=fetch(`https://pixabay.com/api/?key=46193679-17d23e9b240e44f36cc319d65&q=${set}&image_type=photo`)
        api.then((x)=>x.json()).then((x)=>{
            let res=setserch(x.hits)
        })
        .catch(err=>console.log('error',err)
        )
       
    },[set])
      
      
       
            return(
                <>
                <div className="back">
                <h1>Stunning royalty-free images & royalty-free stock</h1>
                <p>Over 5 million+ high quality stock images, videos and music shared by our talented community.</p>
                <input onChange={fun} type="text" placeholder="Serch for all images in pixabay"></input><h4>All Images<i className="fa-solid fa-chevron-down"></i></h4>
                <h3><i className="fa-solid fa-magnifying-glass"></i></h3>
                </div>
                <Nav2/>
                <div className='mainimgdiv'>
            {serch.filter((x) => x.tags.toLowerCase().includes(set.toLowerCase())).map((x) => (
                <Images data={x} key={x.id} src={x.webformatURL} alt={x.tags} />
            ))}
        </div>
        <ul style={{display:'flex',listStyle:'none',justifyContent:'space-around',background:"grey",padding :'20px',color:'white',fontSize:'20px'}}>
            <li>contact us</li>
            <li>Pixabay</li>
            <li>terms and conditions</li>
            <li>Thank you for visiting</li>
            </ul>
                </>
            )
           
        }
    
    export default  Back;

