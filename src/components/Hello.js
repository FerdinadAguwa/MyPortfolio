import React from 'react';
import {Link} from "react-router-dom";


function Hello() {
    return (
        <div>
            <h1>Hello Welcome to my Page</h1>
            <h4>Click <Link to="/about">here</Link>to go to the About me page</h4>
            
        </div>
    )
}

export default Hello
