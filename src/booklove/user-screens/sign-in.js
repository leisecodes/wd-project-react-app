import React from "react";
import { Link } from "react-router-dom";

function SignUp () {
    return (
        <div>
            <h1>Sign Up</h1>
            <input className="form-control"/>
            <input className="form-control"
                    type="password"/>

            <Link to = "/signin">
                Sign In</Link>

        </div>
    )
}
export default SignUp;