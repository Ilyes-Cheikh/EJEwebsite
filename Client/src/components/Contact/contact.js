import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';

export default function Contact() {
  return (
    <div>
      <Zoom>
        <div className="titleWrapper" id="getintouch">
          <h1 contenteditable data-heading="Get in touch" className="titles">Get in touch</h1>
        </div>
      </Zoom>
      <div className="bgr">


        <div className="mapandinfo">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.198882114123!2d10.061577214641058!3d36.81375387463758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd2d96d4a9d6c9%3A0xbbe38a2694938acf!2s%C3%89cole%20Nationale%20des%20Sciences%20de%20l&#39;Informatique!5e0!3m2!1sfr!2stn!4v1619194494622!5m2!1sfr!2stn" ></iframe>



          <div className="infotext">
            <div className="details" color="white">Contact Details</div>
            <div className="youcontact" color="white">
              You can contact us and we will reply as soon as possible our agences are always avaible at your service .
              </div>
              <br/>


            <div className="infoss">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
                 Campus Universitaire de La Manouba, Manouba 2010
                </div>



            <br/>
            <div className="infoss">
              <FontAwesomeIcon icon={faPhoneAlt} />
              Phone 1 :(+216) 28 844 888
              </div>



            <br/>
            <div className="infoss">
              <FontAwesomeIcon icon={faPhoneAlt} />
              Phone 2 :(+216) 99 022 660
              </div>



            <br/>
            <div className="infoss"> <FontAwesomeIcon icon={faEnvelope} />
              Email: contact.junior.ensi@gmail.com
              </div>

          </div>

        </div>
        <div className="footer">
          <div className="footertext"> Copyright © 2021 All rights reserved | Ensi Junior Entreprise
              </div>

          <div className="wrapper">
            <dl>
              <dt class="facebook"><a href="https://www.facebook.com/ENSI.Junior.Entreprise/" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} color="white" />
              </a></dt>
              <dt class="twitter"><a href="https://twitter.com/ENSI_JE" target="_blank">
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </a></dt>
              <dt class="youtube"><a href="https://www.youtube.com/channel/UCypzXMwY_qrspt3owFJ2qng" target="_blank">
                <FontAwesomeIcon icon={faYoutube} color="white" />
              </a></dt>
              <dt class="linkedin"><a href="https://www.linkedin.com/company/ensi-junior-entreprise/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} color="white" />
              </a></dt>
            </dl>
          </div>
        </div>


      </div>
    </div>
  )
}