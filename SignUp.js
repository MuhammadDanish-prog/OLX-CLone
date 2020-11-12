import React from 'react'
import firebase from 'firebase'



function SignUp() {
 
function  sayHello() {
    console.log("Running")
    
        let email=document.getElementById("exampleInputEmail1")
    let psw=document.getElementById("exampleInputPassword1")

    firebase.auth().createUserWithEmailAndPassword(email.value, psw.value)
    .then((result)=>{
        console.log(result)
        window.location="signin.html"
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)

      });
   

  }

    return(
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" onClick={sayHello} className="btn btn-primary">Register</button>
      </form>
    );
    }
    

export default SignUp;