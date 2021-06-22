import React from 'react'
import "./AboutUs.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/general.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import '../../assets/css/titles.css'

export default function AboutUs() {
    return (
        <div >
            <Zoom>
                <div className="titleWrapper">
                    <h1 contenteditable data-heading="About Us" className="titles">About Us </h1>
                </div>
            </Zoom>
            <Fade left cacade>

                <section>
                    <div class="about-container">
                        <div class="left-box"></div>
                        <div class="right-box">
                            <div class="about-content">
                                <h1>What is ENSI Junior Entreprise ?</h1>
                                <p>It's a student association affiliated to the national school of computer science (ENSI) aiming for professionalism through its projects, trainings and events.

                                ENSI Junior Enterprise is a non-profit organization providing students with the opportunity to benefit from their skills in a new professional experience.

Since 2006 we have gained experience and expertise,always driven by a wide range of knowhow,skills and enterpreneurship. We have been able to win the satisfaction of our members through educational courses,technical projects and events and put in practice the theoretical training they receive at the National School of Computer Science(ENSI).</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>

        </div>
    )
}