import React from 'react'
import './Team.css'
import p from '../../assets/img/bureau/aziz.jpg'
import vp from '../../assets/img/bureau/chedli.jpg'
import tres from '../../assets/img/bureau/moenes.jpg'
import marketing from '../../assets/img/bureau/hazem.jpg'
import devco from '../../assets/img/bureau/rafa.jpg'
import re from '../../assets/img/bureau/nour.jpg'
import resprojet from '../../assets/img/bureau/maher.jpg'
import fb from '../../assets/img/facebook.svg'
import linkedin from '../../assets/img/linkedin.svg'
import Zoom from 'react-reveal/Zoom';




function Ourteam() {
  return (
    <div className="teampage">
      <Zoom>
        <div className="titleWrapper">
          <h1 contenteditable data-heading="Our Team" className="titles">Our Team</h1>
        </div>
      </Zoom>
      <div class="TeamContainer">
        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={p} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Aziz Jaidi</h1>
              <div class="social">
                <a href="https://www.facebook.com/aziiiz.1312" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/jaidi-mohamed-aziz-846416173/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <div className="cadre"></div>
            <h2 className="poste">President</h2>

          </div>
        </div>

        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={vp} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Chedly Mejri</h1>
              <div class="social">
                <a href="https://www.facebook.com/Chedly.Mejri98" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/chedly-mejri-936811194/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste">Vice-President</h2>
          </div>
        </div>


        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={tres} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Monenes Ben Soussia </h1>
              <div class="social">
                <a href="https://www.facebook.com/moenes.bensoussia" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/ben-soussia-moenes-659530193/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste">Treasurer</h2>
          </div>
        </div>

        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={devco} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Raafet Madani</h1>
              <div class="social">
                <a href="https://www.facebook.com/raafet.madani" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/mohamed-raafet-madani-667577195/" target="_blank" ><img src={linkedin} alt="" /></a>

              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste">Business Development Manager</h2>
          </div>
        </div>
        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={resprojet} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Meher Ben Mahmoud</h1>
              <div class="social">
                <a href="https://www.facebook.com/meher.ben.mahmoud.10" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/meher-ben-mahmoud-844969184/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste">Operation Manager</h2>
          </div>
        </div>
        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={marketing} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Hazem Frikhi</h1>
              <div class="social">
                <a href="https://www.facebook.com/hzm.frikhi" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/hazem-frikhi/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste">Marketing Manager</h2>
          </div>
        </div>
        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={re} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Nour Jebali</h1>
              <div class="social">
                <a href="https://www.facebook.com/nourjebali4" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/nour-jebali-b53513196/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste" >General Secretary, HR Manager  <br /> & Foreign Relations Manager</h2>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Ourteam;