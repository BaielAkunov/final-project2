import React from 'react';

const Footer = () => {
    return ( 
        
            <footer className="bg-dark text-white mt-5 p-4 text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>We are a company dedicated to providing the best services.</p>
                  </div>
                  <div className="col-md-4">
                    <h5>Contact</h5>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                  </div>
                  <div style={{textAlign:'center'}} className="col-md-2">
                    <h5>Follow Us</h5>
                    <div style={{display:'flex', gap:'10px'}}>
                    <a style={{width:'60px'}} href="#" className="text-white mr-2"><i className="fab fa-facebook-f"></i></a>
                    <a style={{width:'60px'}} href="#" className="text-white mr-2"><i className="fab fa-twitter"></i></a>
                    <a style={{width:'60px'}} href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                    </div>
                    
                  </div>
                </div>
                <div className="mt-3">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
              </div>
            </footer>
     );
}
 
export default Footer;