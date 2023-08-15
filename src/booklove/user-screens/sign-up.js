import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
    return(
        <div>
            <h1>Sign In</h1>
            <input className="form-control"/>
            <input className="form-control"
                type="password"/>
            
            <Link to ="/signup">
                Sign Up
            </Link>
        </div>
    )
}
export default SignIn;