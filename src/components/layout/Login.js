import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from '../../Firebase';




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();



  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth => {history.push("/")}).catch(error => alert(error.message)).catch(error => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      (auth) => {
        if(auth) {
          history.push("/");
        } 
      }).catch(error => alert(error.message));
  }

    
  return (

    <div className="login">
       <Link to="/">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
       alt='Amzazon Logo' 
       className="login-logo"/>     
       </Link>
       <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email Address Here" />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Your Password Here" />
          <button type="submit" className="signInButton" onClick={signIn}>Sign In</button>
        </form>
        <p>By continuing, you agree to this Amazon Clone's Conditions of Use and Privacy Notice.</p>
        <button className="register-button" onClick={register}>Create a new Amazon Account</button>
       </div>
    </div>
  );
}

export default Login
