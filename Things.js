import React  from 'react';
import css from './style/card.css';
import Count from './Count';
import Mobile from './Mobile';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";






const Things=(props)=>{
 
        return (
            
            <div className="card" >
             <Link style={{
              textDecoration:'none',
              color:'black'
            }} to="/Mobile">
             
              {/* <a style={{
              textDecoration:'none',
              color:'black'
            }} href='#'> */}
          <img src={props.imgsrc}  className="card-img-top"   />
        <div className="card-body">
          <h5 className="card-title" id="pic">{props.price}</h5>
          <p className="card-text">{props.name}</p>
          <div>           
              <p style={{
              textAlign:'right'
        }}>{props.date}</p>
      </div>
        </div>
        {/* </a> */}
        </Link>
      </div>
          

        );
    
}


export default Things



