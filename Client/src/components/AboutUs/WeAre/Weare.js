import './Weare.css';
import creat from '../../../assets/img/creat.jpg';
import flexible from '../../../assets/img/flexible.jpg';
import strateg from '../../../assets/img/strateg.jpg';
import Fade from 'react-reveal/Fade';



export default function Weare() {
    return (
        <Fade right>
        <div className="wearecontainer">

            <div className="titree"> We Are? </div>
            <div className="aboutusinwhite"> About US </div>
            
        <div className="carroussell">
            <div className="crossfade">
                <div className="slide1">
                    <div class="page" style={{
                        backgroundImage: 'url(' + creat + ')',
                        backgroundSize: "cover",
                        
                    }}>

                        <div class="widget center" >

                            <div class="blur" style={{
                                backgroundImage: 'url(' + creat + ')',
                                backgroundSize: "cover",
                                
                            }}></div>

                            <div class="text center">
                                <h1 class="were" >We are creative</h1>
                                <p class="ll1"> We believe everything you can imagine is real and that's where our creativity steps in.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide2">
                    <div class="page" style={{
                        backgroundImage: 'url(' + strateg + ')',
                        backgroundSize: "cover",
                        
                    }}>

                        <div class="widget center" >

                            <div class="blur" style={{
                                backgroundImage: 'url(' + strateg + ')',
                                backgroundSize: "cover",
                                
                            }}></div>

                            <div class="text center">
                                <h1 class="were">We are strategic</h1>
                                <p class="ll1">Every step counts, and we like to draw our path wisely and in advance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide3">
                    <div class="page" style={{
                        backgroundImage: 'url(' + flexible + ')',
                        backgroundSize: "cover",
                    
                    }}>

                        <div class="widget center" >

                            <div class="blur" style={{
                                backgroundImage: 'url(' + flexible + ')',
                                backgroundSize: "cover",
                        
                            }}></div>

                            <div class="text center">
                                <h1 className="were">We are flexible</h1>
                                <p class="ll1">being flexible is on top of our list, because so is our client.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="wearetext">  
                <div>We <span className="changecolor">are</span> </div>
                <span style={{fontWeight:'bold'}}>profissional. </span>
                <div>We <span className="changecolor">are</span> </div>
               <span style={{fontWeight:'bold'}}>engaged. </span>
            </div>

        </div>
        </Fade>
    )
}