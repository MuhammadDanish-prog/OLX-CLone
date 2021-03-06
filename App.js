import React,{Component} from 'react';
import Header from './components/Header';
import Links from './components/Links';
import Image from './components/Image';
import Add from './components/Add';
import Slider from './components/Slider';
import Things from './components/Things';
import Row from './components/Row';
import Footer from './components/Footer';
import Row1 from './components/Row1';
import Row2 from './components/Row2';
import Row3 from './components/Row3';
import Row4 from './components/Row4';
import Row5 from './components/Row5';
import Copy from './components/Copy';
import Mobile from './components/Mobile';

import AppRouter from './components/config/Router';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";




class App extends Component{
  render(){
    return(
      <div>
      <AppRouter />
      {/* <Header />
      <Links />
      <Image imgsrc='https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg'/>
      <Add  imgsrc='https://www.whatmobile.com.pk/control/news/assets/12092020/dae41a41642b4f4e8bfd2ce011981d2a_feat.jpg' />
      <Slider />
      <Things 
      imgsrc='data:image/jpeg;base64,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'
             price='1220 Per Dozen'
             name='SURGICAL BANDEGE'/>      */}
      {/* <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Add  imgsrc='https://i.ytimg.com/vi/X5T8kbI4WK0/maxresdefault.jpg'/>
      <Image imgsrc='https://i.ytimg.com/vi/hnCcoGTXMZU/maxresdefault.jpg'/>


      <Footer />
      <Copy /> */}




      </div>
    )
  }
}

export default App;
