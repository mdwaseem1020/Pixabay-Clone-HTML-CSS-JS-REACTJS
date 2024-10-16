import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ImageDetail() {
    let location = useLocation();
    let innerImage = location.state.data;
    
    let [key, setKey] = useState([]);
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=46193679-17d23e9b240e44f36cc319d65&q=${innerImage.tags}&image_type=photo`)
            .then(response => response.json())
            .then(data => setKey(data.hits))
            .catch(err => console.log('error', err));
    }, [innerImage.tags]);
    
    return (
        <>
            <div style={{display:"flex", width:"100%", height:"70vh", padding:'80px'}}>
                <div style={{width:"600px", height:'400px', border:'solid'}}>
                    <img style={{width:'100%', height:'100%'}} src={innerImage.previewURL} alt="Main Image" />
                    <h1>{innerImage.user}</h1>
                </div>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', gap:'20px'}}>
                {key.map((x, index) => (
                    <div key={index}>
                        <img style={{width:'300px', height:'300px'}} src={x.previewURL} alt="" />
                    </div>
                ))}
            </div>
        </>
    );
}
