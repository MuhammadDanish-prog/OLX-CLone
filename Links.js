import React from 'react';
import './style/links.css';
import './style/footer.css';


import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";





class Links extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light" style={{
            backgroundColor: 'White',
            color:'black !important',
            listStyleType:'none'
            }}>
                      

           

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="categories" id="footerdiv">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 footer-div">
              <div>
              <h3>Vehicles</h3>
                <li><a href="#">Tractor & Trailers</a></li>
                <li><a href="#">Boats</a></li>
                <li><a href="#">Others Vehicles</a></li>
                <li><a href="#">Rickshow & Chingchi</a></li>
                <li><a href="#">Bus,Vanes,& Trucks</a></li>
                <li><a href="#">Spare Parts</a></li>
                <li><a href="#">Car Accossiores</a></li>
                <li><a href="#">Cars on installment</a></li>
                <li><a href="#">Cars</a></li>
                <br />
                <h3>Mobiles</h3>
                <li><a href="#">Mobile Phones</a></li>
                <li><a href="#">Accessoies</a></li>
                <li><a href="#">Tablets</a></li>

                <br />

                <h3>Electronics & Home Appliances</h3>

                <li><a href="#">Washing Machines & Dryers</a></li>
                <li><a href="#">Fridges & Freezers</a></li>
                <li><a href="#">AC & Coolers</a></li>
                <li><a href="#">Kitchen Appliances</a></li>
                <li><a href="#">Generators,UPS & Power Solutions</a></li>
                <li><a href="#">Other Home Appliances</a></li>
                <li><a href="#">Games & Entertainments</a></li>
                <li><a href="#">Cameras & Accossiores</a></li>
                <li><a href="#">TV-Video-Audio</a></li>
                <li><a href="#">Computers & Accossiores</a></li>

                <br />

                <h3>Property For Sale</h3>
                <li><a href="#">Portions & FLoors</a></li>
                <li><a href="#">Shops-Offices-Commercial Spaces </a></li>
                <li><a href="#">Appartments & Flats</a></li>
                <li><a href="#">Houses</a></li>
                <li><a href="#">Lands & Plots</a></li>

              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 footer-div">
              <div>
                <h3>Animals</h3>
                <li><a href="#">Other Animals</a></li>
                <li><a href="#">Pet Food & Accossiores</a></li>
                <li><a href="#">Horses</a></li>
                <li><a href="#">Livestocks</a></li>
                <li><a href="#">Dogs</a></li>
                <li><a href="#">Cats</a></li>
                <li><a href="#">Hens & Assels</a></li>
                <li><a href="#">Birds</a></li>
                <li><a href="#">Fish & Aquariums</a></li>

                <br />

                <h3>Furniture & Home Decor</h3>
                <li><a href="#">Other Houshold Items</a></li>
                <li><a href="#">Office Furniture </a></li>
                <li><a href="#">Curtains & Blinds</a></li>
                <li><a href="#">Rugs & Carpets</a></li>
                <li><a href="#">Paintings & Mirrors</a></li>
                <li><a href="#">Garden & Outdoor</a></li>
                <li><a href="#">Tables & Dinnings</a></li>
                <li><a href="#">Home Decoration</a></li>
                <li><a href="#">Beds & Wardrobes</a></li>
                <li><a href="#">Sofa & Chairs</a></li>

                <br />

                <h3>Business, Agriculture & Industrial</h3>
                <li><a href="#">Medical & Pharma</a></li>
                <li><a href="#">Other Business & Industry </a></li>
                <li><a href="#">Agriculture</a></li>
                <li><a href="#">Construction & Heavy Machinery</a></li>
                <li><a href="#">Trade & Industrial</a></li>
                <li><a href="#">Food & Restuarents</a></li>
                <li><a href="#">business For Sales</a></li>

                <br />

                <h3>Bikes</h3>
                <li><a href="#">Scooters</a></li>
                <li><a href="#">ATV & Quads </a></li>
                <li><a href="#">Bicycles</a></li>
                <li><a href="#">Spare Parts</a></li>
                <li><a href="#">Motercycles</a></li>
                
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 footer-div">
              <div>
                <h3>Fashion & Beauty</h3>
                <br/>
                <li><a href="#">Other Fashion</a></li>
                <li><a href="#">Couture</a></li>
                <li><a href="#">Lawn & Pret</a></li>
                <li><a href="#">Wedding</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Skin & Hair</a></li>
                <li><a href="#">Make Up</a></li>
                <li><a href="#">Jewellery</a></li>
                <li><a href="#">FootWear</a></li>
                <li><a href="#">Clothes</a></li>
                <li><a href="#">Accossiores</a></li>

                <br />

                <h3>Property For Rent</h3>
                <li><a href="#">Lands & Plots</a></li>
                <li><a href="#">Vecation Rentals - Guest House </a></li>
                <li><a href="#">Roomates & Paying Guests</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Shops - Offices - Commercial Spaces</a></li>
                <li><a href="#">Portion & Floors</a></li>
                <li><a href="#">Apartments & Flats</a></li>
                <li><a href="#">Houses</a></li>

                <br />

                <h3>Jobs</h3>
                <li><a href="#">Other Jobs</a></li>
                <li><a href="#">Part - Time </a></li>
                <li><a href="#">Domestic Staff</a></li>
                <li><a href="#">Medical</a></li>
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Accounting & Finance</a></li>
                <li><a href="#">Human Resources</a></li>
                <li><a href="#">Clerical & Adminstration</a></li>
                <li><a href="#">Hotels & Tourism</a></li>
                <li><a href="#">IT & Networking</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Customer Services</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Advertising & PR</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Online</a></li>

              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 footer-div">
              <div>

                <h3>Services</h3>
                <li><a href="#">Farm & Frsh Food</a></li>
                <li><a href="#">Catering & Restuarents </a></li>
                <li><a href="#">Home & Office Repair</a></li>
                <li><a href="#">Movers & Pakers</a></li>
                <li><a href="#">Maids & Domestic Help</a></li>
                <li><a href="#">Health & Beauty</a></li>
                <li><a href="#">Event Services</a></li>
                <li><a href="#">Electronics & Computer Repairs</a></li>
                <li><a href="#">Other Services</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Drivers & Taxi</a></li>
                <li><a href="#">Car Rental</a></li>
                <li><a href="#">Traval Visa</a></li>
                <li><a href="#">Eduaction & Classes</a></li>
                <br/>
               <h3>Books, Sports & Hobbies</h3>
                <li><a href="#">Other Hobbies</a></li>
                <li><a href="#">Gym & Fitness </a></li>
                <li><a href="#">Sports Equipment</a></li>
                <li><a href="#">Musical Instrument</a></li>
                <li><a href="#">Books & Magazines</a></li>
        
                <br />

                <h3>Kids</h3>
                <li><a href="#">Kids Accossiores</a></li>
                <li><a href="#">Kids Bikes</a></li>
                <li><a href="#">Swings & Slides</a></li>
                <li><a href="#">Prams & Walkers</a></li>
                <li><a href="#">Toys</a></li>
                <li><a href="#">Kids Furniture</a></li>
                
              </div>
            </div>
          </div>
        </div>
      </div>
                
              </div> 
            {/* <Link className="nav-link" to="/">Mobile Phones</Link> */}
            <Link className="nav-link" to="/Cars">Cars</Link>
            <Link className="nav-link" to="/Motercycles">Motercycles</Link>
            <Link className="nav-link" to="/Houses">Houses</Link>
            <Link className="nav-link" to="/Tv">TV-Video-Audios</Link>
            <Link className="nav-link" to="/Tablets">Tablets</Link>
            <Link className="nav-link" to="/Lands">Lends And Plots</Link>


            
          </div>
        </div> 
          </nav>
        )
    }
}

export default Links