import React  from 'react';
import firebase from './config/Firebase';


 facebook_Login= () =>{
    return(
      var provider = new firebase.auth.FacebookAuthProvider();
  
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("user",user)
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log("error",error)
  
      });
  
    
    );
  }
  