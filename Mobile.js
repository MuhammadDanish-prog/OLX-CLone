import React,{Component} from 'react';
import Header from './Header';
import Links from './Links';
import Footer from './Footer';
import Copy from './Copy';
import Things from './Things';
import { Link } from '@material-ui/core';
import Chat from './Chat';







const Mobile =(props)=> {
    return (
      <div>
        <Header/>
        <Links/>
        <Link to='/Mobile/Chat'>CHAT WITH SELLER</Link>

        <div style={{
          height:'400px',
          width:'100%',
          backgroundColor:'blue'
        }}>
                      <div className="card" >
             <Link style={{
              textDecoration:'none',
              color:'black'
            }} to="/Mobile">
             
               <a style={{
              textDecoration:'none',
              color:'black'
            }} href='#'> 
          <img src={props.imgsrc}  className="card-img-top"   />
        <div className="card-body">
          <p className="card-text">{props.name}</p>
          
          <div>           
              <p style={{
              textAlign:'right'
        }}>{props.date}</p>
      </div>

        </div>
         </a> 

        </Link>
      </div>

        </div>


        <Footer />
        <Copy/>

      </div>
    )
}


export default Mobile;