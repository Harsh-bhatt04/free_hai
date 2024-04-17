import React from 'react'
import react from './img/react.jpg'
import Dsa from './img/Data-Structures-and-Algorithm.png'
import frontend from './img/html-css-javascrit-1024x576.jpg'
import mern from './img/mern.jpg'
import { Link } from 'react-router-dom'

function Courses() {
    return (
        <>
            <div>
                {/* <div className="companies-section flex">
                    <div className="container">
                        <div className="small-bold-text">Nothing but creativity</div>
                    </div>
                </div> */}

                {/* <!-- feature section --> */}
                <section className="feature-section">
                    <div className="container">
                        <div className="feature-header">
                            <h2 >The courses You will find Here..</h2>
                        </div>
                        <div className="features-area flex">
                            <div className="features-card flex">
                                <img src={react} alt="" style={{ height: "100px" }} />
                                <h3>REACT JS</h3>
                                <Link to="/Courses/ReactCourses" className="secondry-button">GO TO<i className="fa-solid fa-right-long"></i></Link>
                            </div>
                            <div className="features-card flex">
                                <img src={mern} alt="" style={{ height: "100px" }} />
                                <h3>MERN stack</h3>
                                <Link to="/courses/MernStack" className="secondry-button">GO TO<i className="fa-solid fa-right-long"></i></Link>
                            </div>

                            <div className="features-card flex">
                                <img src={Dsa} alt="" style={{ height: "100px" }} />
                                <h3>DSA</h3>
                                <Link to="/Courses/Dsacourses" className="secondry-button">GO TO<i className="fa-solid fa-right-long"></i></Link>
                            </div>

                            <div className="features-card flex">
                                <img src={frontend} alt="" style={{ height: "100px" }} />
                                <h3>Frontend </h3>
                                <Link to="/Courses/FrontEnd" className="secondry-button">GO TO<i className="fa-solid fa-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Courses