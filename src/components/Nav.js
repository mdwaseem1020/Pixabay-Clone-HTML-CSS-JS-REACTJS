import React from "react";
import { Link } from "react-router-dom";


class Nav  extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <>
                <ul className="nav">
                    <li id='li1'>pixabay</li>
                    <li id='li2'><p>Explore<i className="fa-solid fa-chevron-down"></i></p></li>
                    <li id='li3'><p><i className="fa-solid fa-bell"></i></p></li>
                    <Link style={{textDecoration:'none'}} to='/Login'><li id='li4'><p id='user'>Login</p></li></Link>
                    <li id='li5'><i className="fa-solid fa-arrow-up-from-bracket"></i> <p>  Upload</p></li>
                </ul>
            </>
        )
    }
}
export  default Nav;
