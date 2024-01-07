import React from "react";
import MultiCarousel from "react-multi-carousel"; // Renommez le Carousel de la bibliothèque
import "react-multi-carousel/lib/styles.css";
import Profil1 from "../assets/img/profil.jpg";
import Profil2 from "../assets/img/profil2.jpg";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carrousel = () => {
  return (
          <section className="sectionCorp3">
                <div className="container text-start">
                    <div className="column">
                        <p className="gy1">Practice Advice</p>
                        <h1 className="fw-bold">Our Experts Teacher</h1>
                        <p className="mt-3 text-secondary mm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    
                </div>
                
    <MultiCarousel responsive={responsive} >
      
      <div className="sectCar">
      <div className="profile-container">
        <img src={Profil1} alt="Photo de profil" className="profile-picture"/>
        <div className="profile-text ">
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta recusandae aut odio assumenda voluptates esse at ad tenetu</p>
            <p className="mt-5"><FaStar className="star1"/> <FaStar className="star1"/> <FaStar className="star1"/> <FaStar className="star1"/>    <FaRegStar  className="star1"/></p>
            <p className="fw-bold fs-2">Regina Miles</p>
            <p className="text-secondary">Designer</p>
            
        </div>
    </div>
      </div>
      
        <div className="profile-container">
        <img src={Profil2} alt="Photo de profil" className="profile-picture"/>
        <div className="profile-text ">
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta recusandae aut odio assumenda voluptates esse at ad tenetu</p>
            <p className="mt-5"><FaStar className="star1"/> <FaStar className="star1"/> <FaStar className="star1"/> <FaStar className="star1"/>    <FaRegStar  className="star1"/></p>
            <p className="fw-bold fs-2">Regina Miles</p>
            <p className="text-secondary">Designer</p>
            
        </div></div>
      
     
      
    </MultiCarousel>
    </section>
    
  );
};

export default Carrousel; // Exportez le composant sous le nom "Carrousel"