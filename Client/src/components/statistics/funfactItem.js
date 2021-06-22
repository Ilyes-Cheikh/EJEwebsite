import React, { Component } from 'react';
import CountUp from 'react-countup'
import './funfact.css'
import VisibilitySensor from "react-visibility-sensor";
import Fade from 'react-reveal/Fade';
import { MdDoneAll, MdTrendingUp, MdCheckCircle, MdSupervisorAccount, MdLocalAtm } from "react-icons/md";


class FunfactItem extends Component {

    state = {
        appear: false
    }

    visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            this.setState({
                appear: true
            })
        }
    }

    render() {
        
        return (
            <Fade bottom cascade>

            <div className="col-6 col-md-3 text-center">
                <div className="counter-item">
                {(() => {
                        if (this.props.counterId == 1) {
                            return (
                                <MdLocalAtm className="icon" />
                            )
                        } else if (this.props.counterId == 2) {
                            return (
                                <MdDoneAll className='icon' />
                            )
                        } else if (this.props.counterId == 3) {
                            return (
                                <MdSupervisorAccount className='icon' />
                            )
                        } else  {
                            return (
                                <MdTrendingUp className="icon" />
                            )
                        }
                    })()}
                    <h2 className="counter-number">
                        <CountUp start={this.state.appear ? 0 : null} end={this.props.counterNumber}>
                            {({ countUpRef }) => (

                                <div>
                                    <span ref={countUpRef} />
                                    <VisibilitySensor
                                        onChange={(isVisible) => this.visibleChangeHandler(isVisible)}>
                                        <span className="sr-only">+</span>
                                    </VisibilitySensor>
                                </div>
                            )}

                        </CountUp>
                    </h2>

                    <h6 className="counter-txt" >{this.props.counterText}</h6>
                </div>
            </div>
            </Fade>
        );
    }
}

export default FunfactItem;