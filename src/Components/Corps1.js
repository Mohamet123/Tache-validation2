
import { ArrowRightCircle } from "react-bootstrap-icons";
import ROW4 from "../assets/img/row4.png";

export const Corp1 = () => {
    return(
        <section className="sectionCorp1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 md1">
                        <div className="trait2 mb-5"></div>
                        <h1>Packages that are aprodable </h1>
                        <p className="mt-3">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                        <button className='vvd mt-5' onClick={() => console.log('connect')}><span>Learn More <ArrowRightCircle size={25}/></span></button>
                    </div>
                    <div className="col-md-6">
                        <img src={ROW4} alt="image-corp1" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
   )
}