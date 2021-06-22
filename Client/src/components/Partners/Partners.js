import React from 'react';
import './Partners.css'
import Zoom from 'react-reveal/Zoom';
import img1 from '../../assets/img/logos entreprises/3S.png'
import img2 from '../../assets/img/logos entreprises/cognira.png'
import img3 from '../../assets/img/logos entreprises/FINLOGIK.png'
import img4 from '../../assets/img/logos entreprises/infor.png'
import img5 from '../../assets/img/logos entreprises/iobeya.png'
import img6 from '../../assets/img/logos entreprises/talan.png'
import img7 from '../../assets/img/logos entreprises/new access.png'
import img8 from '../../assets/img/logos entreprises/mssolution.png'
import img9 from '../../assets/img/logos entreprises/telnet.png'


export default function Partners() {
    return (
        <section id="partners">
            <Zoom>
                <div className="titleWrapper">
                    <h1 contenteditable data-heading="Our Partners" className="titles">Our Partners</h1>
                </div>
            </Zoom>
            <div className="partners">
                <div className="box">
                    <span style={{ "--i": 1 }}><img src={img1} /></span>
                    <span style={{ "--i": 2 }}><img src={img2} /></span>
                    <span style={{ "--i": 3 }}><img src={img3} /></span>
                    <span style={{ "--i": 4 }}><img src={img4} /></span>
                    <span style={{ "--i": 5 }}><img src={img5} /></span>
                    <span style={{ "--i": 6 }}><img src={img6} /></span>
                    <span style={{ "--i": 7 }}><img src={img7} /></span>
                    <span style={{ "--i": 8 }}><img src={img8} /></span>
                    <span style={{ "--i": 9 }}><img src={img9} /></span>
                </div>
            </div>
        </section>
    )
}