import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () =>{
    return(
        <section className="footer">
            <div className="container mt-5 ">
            <div className="row _footer">
            
                <div className="col-md-2 text-start">
                    <h4>Get In Touch</h4>
                    <p>The quick fox jumps over the lazy dog</p>
                    
                    <div className="_icons"><FaFacebook /><FaInstagramSquare /><FaTwitter /></div>
                </div>
                    
                   
                <div className="col-md-2 text-start">
                     <h4>Company info</h4>
                     <p>About Us</p>
                     <p>Carrier</p>
                     <p>We are hiring</p>
                     <p>Blog</p>
                </div>
                    
                   
                <div className="col-md-2 text-start">
                     <h4>Features</h4>
                     <p>Business Marketing</p>
                     <p>User Analytic</p>
                     <p>Live Chat</p>
                     <p>Unlimited Support</p>
                </div>
                <div className="col-md-2 text-start">
                     <h4>Resourses</h4>
                     <p>IOS & Android</p>
                     <p>Watch a Demo</p>
                     <p>Customers</p>
                     <p>API</p>
                </div>
            </div>


           
                   
            </div>
            
        </section>
            
        )
        
}