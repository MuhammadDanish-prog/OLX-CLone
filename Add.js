import React  from 'react';
import images from '../images/1.PNG';




function Add(props){
        return (
    
          <img style={{
           width:'70%',
           height:'250px',
           display: 'block',
           marginLeft: 'auto',
           marginRight: 'auto',
           marginTop:'20px',
           marginBottom:'20px'
           }}src={props.imgsrc} alt='1.PNG' className="img-fluid" alt="Responsive image" />
        );
    
}


export default Add