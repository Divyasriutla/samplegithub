import React from 'react';
import './Login.css';

class Login extends React.Component{
    validate(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if ( username === "Divyasri" && password === "div1689"){
        alert ("Login successfully");
        }
        else{
        alert ("Login Failed");
        }
      }
    render(){
        return (
            <div className = "Login">
            <header className = "Login-header">
            <h1 className="Login-title">Login</h1>
            <label>Username</label><br/>
            <input placeholder = "Username" type = "text" id ="username"/><br/>
            <label>password</label><br/>
            <input placeholder = "password" type = "text" id = "password"/><br/><br/>
            <button className="btn" type= "submit" onClick = {this.validate} id = "submit">Submit</button>
            </header>
            </div>
        );
    }
}
export default Login;