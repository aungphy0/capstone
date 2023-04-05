import React from "react";

export default function LoginLittleLemon() {
    return (
        <div className="login-page">
            <label>Username</label>
            <input type="text" name="username" />
            <br></br>
            <br></br>
            <label>Password</label>
            <input type="password" name="password" />
            <br></br>
            <br></br>
            <button>Login</button>
        </div>
    )
}