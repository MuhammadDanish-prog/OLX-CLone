import React  from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import firebase from 'firebase';





function Header(){
  function sayHello() {
    console.log("RUNNIING")
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
    return(
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
        <Link className="navbar-brand" to="/"><img style={{
          height:'40px',
        }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logotyp_OLX_.png/220px-Logotyp_OLX_.png'/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <input style={{
              width:'320px',
              border:'2px solid black',
              marginRight:'10px'
            }} className="form-control mr-sm-2" type="search" placeholder="Karachi,Sindh.." aria-label="Search" />

            <input style={{
              width:'600px',
              border:'2px solid black',
              borderRadius: '100px 0 0 100px',
              minWidth: '150px',
              minWidth: '45px'
            }} className="form-control" type="search" placeholder="Find Cars Mobile Phone and More..." aria-label="Search" />
                            <div className="input-group-append">
                  <button style={{

                      color: '#fff',
                      background: 'black',
                      borderRadius: '0 100px 100px 0px',
                      minWidth: '80px',
                      height:'40px'

                  }} className="input-group-text" id="basic-addon2">SEARCH</button>
                </div>



   

          </ul>
          <form className="form-inline my-2 my-lg-0">

          <li style={{
            listStyleType:'none',
            width:'100px'
          }} className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login
              </a>
              <div style={{
                width:'200px'
              }} className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to='/SignIn'>WITH GOOGLE</Link>
                <button className='btn-primary' onClick={sayHello}>Facebook</button>
              </div>
            </li>

            <button style={{

color: 'black',
background: 'white',
border:'4px solid yellow',
borderRadius: '100px 100px 100px 100px',
minWidth: '80px',
height:'40px',
float:'right',
boxShadow: '2px 4px 0.3px #888888'

}} className="input-group-text" id="basic-addon2">+SELL</button>
        </form>
         
        </div>
      </nav>


    )
};



export default Header;
