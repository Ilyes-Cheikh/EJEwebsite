import React from 'react';
import './Ourskills.css';
import Card from 'react-bootstrap/Card'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';


export default function Skills() {
    return (
        <div className='page'>
            <Zoom>
                <div className="titleWrapper">
                    <h1 contenteditable data-heading="Our Skills" className="titles">Our Skills</h1>
                </div>
            </Zoom>
            <div className='body'>
                <Slide left>
                    <div className='left'>
                        <h2 className='grandtitre'> We’ve skilled in wide range of web and Other digital market tools.</h2>
                        <p className='parag'>Armed with authentic expertise and provided with the freshness of talented and inventive engineers,
                     the EJE has always persisted in satisfying its customers by meticulously deploying the technologies best suited to the objectives of the project.</p>
                    </div>
                </Slide>
                <Slide right>
                    <Card className='right'>
                        <Card.Body>
                            <div className="line1">
                                <div className='chat'>
                                    <    div className="chatbot">
                                        <CircularProgressbar value={65} text={`${65}%`} styles={buildStyles({ pathColor: "#2ea3dd" })} />
                                    </div>
                                    <div className="txt1"> Chatbot conception & deployment</div>
                                </div>
                                <div className='web'>
                                    <div className="website">
                                        <CircularProgressbar value={85} text={`${85}%`} styles={buildStyles({ pathColor: "#2ea3dd" })} />
                                    </div>
                                    <div className="txt2"> Website developement & deployment </div>
                                </div>
                            </div>
                            <div className="line2">
                                <div className="3">
                                    <   div className="Design">
                                        <CircularProgressbar value={85} text={`${85}%`} styles={buildStyles({ pathColor: "#2ea3dd" })} />
                                    </div>
                                    <div className="txt3">Design</div>
                                </div>
                                <div className="4">
                                    <div className="ts1">
                                        <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({ pathColor: "#2ea3dd" })} />
                                    </div>
                                    <div className="txt4">Android Development</div>
                                </div>
                                <div className="5">
                                    <div className="ts1">
                                        <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({ pathColor: "#2ea3dd" })} />
                                    </div>
                                    <div className="txt5">Software Support</div>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>
                </Slide>

            </div>

        </div>

    )
}