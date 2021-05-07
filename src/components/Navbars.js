import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import {Button}  from './Button';



function Navbars() {
    // this is to change things up using state
    const [click, setClick] = useState(false);
    const [button,setButton]= useState(true)

// essentially you want the click to be set to the opposite to the function 
// above is false so saying not click will set it to postive
    const handleClick = ()=> setClick (!click);

    const closeMenu = ()=> setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true)
        }

    }

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener("resize", showButton)
    return (
        <>
            <nav className ="navbar">
                <div className ="navbar-container">
                <Link to="/" className= "navbar-logo" onClick={closeMenu}>
                    P<i className="fab fa-battle-net"></i>rtfolio
                </Link>
                <div className = "menu-icon" onClick={handleClick}>
                    <i className = {click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className = {click ? "nav-menu active" : "nav-menu"}>
                    <li className = "nav-item">
                        <Link to= "/" className="nav-links" onClick={closeMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to= "/services" className="nav-links" onClick={closeMenu}>
                            SERVICES
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to= "/projects" className="nav-links" onClick={closeMenu}>
                            PROJECTS
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle = "btn--outline" >Contact Us</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbars


