import React from 'react';
import './Services.css';
import img2 from '../../assets/img/Services/img2.png';
import mobile from '../../assets/img/Services/mobile.png';
import pbb from '../../assets/img/Services/pbb.png';
import chat from '../../assets/img/Services/chat.png';


export default function OurServices() {
    return (
        <div className="wholepage">
            <div className="Header ServicesHeader" >
                <div className="HeaderOverlay">
                <div className="titleWrapper">
                        <h1 contenteditable data-heading="Our Services" className="titles">Our Services</h1>
                </div>
                </div>
            </div>
            <div class="services-container">
                <div class="service-card">
                    <div class="face face1">
                        <div class="service-content">
                            <img src={img2} alt="" className="img1" />
                            <h3 className="nom-service">Website developement & deployment</h3>
                        </div>
                    </div>

                    <div class="face face2">

                        <div class="service-content">
                            <p>Web development broadly refers to the tasks associated with developing websites for hosting via intranet or internet.<br /><br />

The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.</p>

                        </div>

                    </div>
                </div>



                <div class="service-card">
                    <div class="face face1">
                        <div class="service-content">
                            <img src={chat} alt="" className="img2" />
                            <h3 className="nom-service" >Chatbot agent conception and deployment</h3>
                        </div>
                    </div>

                    <div class="face face2">

                        <div class="service-content">
                            <p>A chatbot is an artificial intelligence (AI) program that simulates interactive human conversation by using key pre-calculated user phrases and auditory or text-based signals.<br /><br />

Chatbots are frequently used for basic customer service and marketing systems that frequent social networking hubs and instant messaging (IM) clients.

</p>

                        </div>

                    </div>
                </div>

                <div class="service-card">
                    <div class="face face1">
                        <div class="service-content">
                            <img src={mobile} alt="" className="img3" />
                            <h3 className="nom-service" >Mobile applications developement</h3>
                        </div>
                    </div>

                    <div class="face face2">

                        <div class="service-content">
                            <p>Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices.

                            Mobile application development is similar to Web application development and has its roots in more traditional software development. One critical difference, however, is that mobile applications (apps) are often written specifically to take advantage of the unique features a particular mobile device offers.

</p>

                        </div>

                    </div>
                </div>

                <div class="service-card">
                    <div class="face face1">
                        <div class="service-content">

                            <img src={pbb} alt="" className="img4" style={{ marginLeft: '24%', marginBottom: '5%' }} />

                            <h3 className="nom-service" >Software support</h3>
                        </div>
                    </div>

                    <div class="face face2">

                        <div class="service-content">
                            <p>It is the after-sales service in solving software conflicts and usability problems, and in supplying updates and patches for bugs and security holes in our programs.<br />
Software support services may include new product installation services, installation of product updates, migrations for major releases of software, other types of proactive or reactive on-site services, and support for custom application or infrastructure software.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}