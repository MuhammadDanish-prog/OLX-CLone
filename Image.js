import React  from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import images from '../images/2.png';


function Image(props){
  return (
    
    <img style={{width:'100%',height:'300px'}}src={props.imgsrc} alt='2.png' className="img-fluid" alt="Responsive image" />
  );
}



export default Image
