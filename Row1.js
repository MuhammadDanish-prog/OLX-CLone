import React from 'react';
import Things from './Things';
import Mobile from './Mobile';
import Pic from '../images/3.jpg';


class Row1 extends React.Component{
    render(){
        return(
            <div className="container" style={{
                marginTop:'20px'

                }}>
            <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
             <Things
             imgsrc='https://assets.newatlas.com/dims4/default/761b085/2147483647/strip/true/crop/1520x1013+140+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fgalaxy-a9-phone-1.jpg'
             price='120,000'
             name='SAMSUNG'
             date='23/5/2020'
              />
            </div>
            <div className="col-lg-3 col-md-3 col-12">
            <Things 
            imgsrc='https://static.toiimg.com/photo/59267498.cms'
             price='200000'
             name='ONE PLUS'
             date='10/10/2020' />

            </div>
            <div className="col-lg-3 col-md-3 col-12">
            <Things 
            imgsrc='https://qadardan.com/image/cache/catalog/news/qmobile-is-launching-a-4g-capable-feature-phone-for-less-than-rs-4000-335x200h.jpg'
             price='12,000'
             name='Q MOBILE'
             date='5/3/2020'/>

            </div>
            <div className="col-lg-3 col-md-3 col-12">
            <Things
            imgsrc='https://st1.bgr.in/wp-content/uploads/2019/09/Realme-XT-Review-7.jpg'
             price='20000'
             name='REAL ME'
             date='20/6/2020' />

            </div>
          </div> 
          </div>
        );
    }
}

export default Row1