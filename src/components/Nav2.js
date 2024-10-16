import React from "react";
class Nav2  extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <ul className="nav2">
                    <li className="nav2list" style={{backgroundColor:'#f7f7f7',borderRadius:'10px',padding:'5px',color:'green'}}><i className="fa-solid fa-house"></i><p>Home</p></li>
                    <li className="nav2list"><p className="nav2items"><i className="fa-solid fa-camera"></i></p><p>Photo</p></li>
                    <li className="nav2list"><p className="nav2items"><i className="fa-solid fa-paintbrush"></i></p><p>Illustrations</p></li>
                    <li className="nav2list"><p className="nav2items"><i className="fa-solid fa-pen-nib"></i></p> <p>Vectors</p></li>
                    <li className="nav2list"><p className="nav2items"><i className="fa-solid fa-video"></i></p><p>Videos</p></li>
                    <li className="nav2list"><p className="nav2items"><i className="fa-solid fa-music"></i></p><p>Music</p></li>
                    <li className="nav2list"><p className="nav2items"><i className="fa-solid fa-volume-high"></i></p><p>Sound Effects</p></li>
                    <li className="nav2list"><p className="nav2items" ><i className="fa-solid fa-fire-flame-curved"></i></p><p>Gifs</p></li>
                </ul>
                <ul className="nav3">
                    <li className="nav3list"><p>background</p></li>
                    <li className="nav3list"><p>wallpaper</p></li>
                    <li className="nav3list"><p>flowers</p></li>
                    <li className="nav3list"><p>woman</p></li>
                    <li className="nav3list"><p>landscape</p></li>
                    <li className="nav3list"><p>people</p></li>
                    <li className="nav3list"><p>money</p></li>
                    <li className="nav3list"><p>travel</p></li>
                    <li className="nav3list"><p>house</p></li>
                    <li className="nav3list"><p>sea</p></li>
                    <li className="nav3list"><p>iphone wallpaper </p></li>
                    <li className="nav3list"><p>school</p></li>
                </ul>
            </>
        )
    }
}

export  default Nav2;
