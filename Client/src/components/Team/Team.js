import React from 'react'
import './Team.css'
import p from '../../assets/img/bureau/Khalil.png'
import vp from '../../assets/img/bureau/Khadija.png'
import tres from '../../assets/img/bureau/khouloud.png'
import marketing from '../../assets/img/bureau/Oumaima.png'
import devco from '../../assets/img/bureau/Ashwek.png'
import re from '../../assets/img/bureau/Habiba.png'
import sg from '../../assets/img/bureau/Ines.png'
import resprojet from '../../assets/img/bureau/Meher.png'
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
              <h1 className="Name">Khalil Thabet</h1>
              <div class="social">
                <a href="https://www.facebook.com/khalil9thabet/" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/khalil-thabet/" target="_blank"><img src={linkedin} alt="" /></a>
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
              <h1 className="Name">Khadija Makhlouf</h1>
              <div class="social">
                <a href="https://www.facebook.com/khadija.makhlouf.731/" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/khadijamalek-makhlouf/" target="_blank"><img src={linkedin} alt="" /></a>
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
              <img src={sg} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Ines Essetti</h1>
              <div class="social">
                <a href="https://www.facebook.com/ines.essetti/" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/ines-essetti-426a981ba/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <div className="cadre"></div>
            <h2 className="poste"> General Secretary</h2>

          </div>
        </div>
        <div class="person-container">
          <div class="person">
            <div class="front">
              <img src={tres} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Khouloud Hmed</h1>
              <div class="social">
                <a href="https://www.facebook.com/benahmed.khouloud.77" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/khouloud-hmed-8524731ba/" target="_blank"><img src={linkedin} alt="" /></a>
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
              <img src={re} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Habiba Gaddacha</h1>
              <div class="social">
                <a href="https://www.facebook.com/profile.php?id=100009370713348" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/habiba-gaddacha-6755611ba/" target="_blank"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste" >HR Manager </h2>
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
              <h1 className="Name">Oumaima ElMouelhi</h1>
              <div class="social">
                <a href="https://www.facebook.com/profile.php?id=100004879000931" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/oumaima-el-mouelhi-4939111a1/" target="_blank"><img src={linkedin} alt="" /></a>
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
              <img src={devco} alt="" />
            </div>

            <div class="back">
              <h1 className="Name">Ashwek Werghi</h1>
              <div class="social">
                <a href="https://www.facebook.com/achwek.werghi.54" target="_blank"><img src={fb} alt="" /></a>
                <a href="https://www.linkedin.com/in/ashwek-werghi-4193291b9/" target="_blank" ><img src={linkedin} alt="" /></a>

              </div>
            </div>
          </div>

          <div class="designation">
            <h2 className="poste">Business Development Manager</h2>
          </div>
        </div>
    
      </div>
    </div>

  )
}
export default Ourteam;