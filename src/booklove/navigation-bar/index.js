import React from "react";
import './navigation.css';

const NavigationBar = ()=> {

    return(
        <div className="list-group">
            <li className="list-group-item list-group-item-primary nav-bar">Home</li>
            <li className="list-group-item list-group-item-primary nav-bar">Profile</li>
            <li className="list-group-item list-group-item-primary nav-bar">My Clubs</li>
            <li className="list-group-item list-group-item-primary nav-bar">Search Books</li>
        </div>
    )
}
export default NavigationBar;