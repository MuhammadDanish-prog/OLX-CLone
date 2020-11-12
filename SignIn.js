import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import firebase from 'firebase';


let SignIn=()=>{
    // let email=document.getElementById("login-email")
    // let password=document.getElementById("login-psw")

    // firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    // .then((result)=>{
    //     console.log("Login Successfully")
    //     console.log(result)
    // })
    // .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    //     console.log(errorMessage)
    //   });

    console.log("Running")
}

class SignIN extends React.Component{
    render(){
    return(
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="login-email" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="login-psw" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={SignIn}>Submit</button>
        <Link to='./SignUp'>SignUp</Link>
      </form>
    );
    }
}

export default SignIN;