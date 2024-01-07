import { Container , Row , Col} from "react-bootstrap";
import row1 from "../assets/img/row1.jpg";
import row2 from "../assets/img/row2.jpg";
import row3 from "../assets/img/row3.png";


export const Banners = () => {
    return(
        <div className="mt d-flex flex-column justify-content-center text-center">
            <div ><p className="wel">Welcome</p></div>
            <div>
                <p className="sel">Selling on the</p>
                <p className="sel">internet like a pro</p>
            </div>
            <div >
                <p className="ww mt-5">We Know how large objects will act , but things on a </p>
                <p className="ww">small scale just do not act that way.</p>
            </div>
            <div>
            <button type="button"  className=" btn1 btns">Get Quote Now</button>
            <button type="button"  className=" btn2 btns">Learn More</button>

            </div>
            <div className=" container mt-5   ">
                <div className="row gap-5 justify-content-center"> 
                    <div className="col-sm-3 bv">
                        {/* 1er row */}
                        <div className="container">
                            <div className="column colon1">
                            <div className="img1"><img src={row1} alt="row" className="img-fluid"/>
                            <h6 className="text-black mt-5 fw-bold">Training Courses</h6>
                            <div class="trait"></div>
                            <div><p className="text-black">The gradual accumulation of information about atomic and small-scall behaviour...</p></div></div> 
                        
                            </div>
                        </div>
                       {/* fin */}
                    </div>

                    <div className="col-sm-3 bv">
                        {/* 2em row */}
                        <div className="container">
                            <div className="column colon1">
                            <div className="img1"><img src={row2} alt="row" className="img-fluid"/>
                            <h6 className="text-black mt-5 fw-bold">2,769 online courses</h6>
                            <div class="trait"></div>
                            <div><p className="text-black">The gradual accumulation of information about atomic and small-scall behaviour...</p></div></div> 
                        
                            </div>
                        </div>
                       {/* fin */}
                    </div>
                    <div className="col-sm-3 bv bv2 mb-5">
                        {/* 3em row */}
                        <div className="container ">
                            <div className="column colon1">
                            <div className="img1"><img src={row3} alt="row" className="img-fluid"/>
                            <h6 className="text-black mt-5 fw-bold">Training Courses</h6>
                            <div class="trait"></div>
                            <div><p className="text-black">The gradual accumulation of information about atomic and small-scall behaviour...</p></div></div> 
                        
                            </div>
                        </div>
                       {/* fin */}
                    </div>
                </div>
            </div>
        </div>
        
    )
}