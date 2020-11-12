import React from 'react';
import footercss from './style/footercopy.css';



class Footer extends React.Component{
    render(){
        return(
<footer className="footersection" id="footerdiv">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-12 footer-div">
              <div>
              <h3>POPULAR CATEGORIES</h3>
                <li><a href="#">Car</a></li>
                <li><a href="#">Flats For Rent</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Mobile Phones</a></li>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 footer-div">
              <div>
                <h3>TRENDING SEARCHES</h3>
                <li><a href="#">Bikes</a></li>
                <li><a href="#">Wathces</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Dogs</a></li>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 footer-div">
              <div>
                <h3>ABOUT US</h3>
                <br/>
                <li><a href="#">About OLX group</a></li>
                <li><a href="#">OLX Blogs</a></li>
                <li><a href="#">Contact US</a></li>
                <li><a href="#">OLX For business</a></li>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 footer-div">
              <div>
                <h3>OLX</h3>
                <br/>
                <li><a href="#">Help</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Legal & Privacy Information</a></li>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 footer-div">
              <div>
                <h3>NEWSLETTER</h3>
                <p>For business professionals caught between high OEM price and
                  mediocre print and graphic output.
                </p>
                <div className="container newsletter-main">
                  <div className="row">
                    <div className="col-lg-12 col-12">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control news-input" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">Subscribe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
        );
    }
}

export default Footer