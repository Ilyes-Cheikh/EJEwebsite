import React from 'react'
import video from '../../assets/img/Home.mp4'
import './Home.css'


export default function () {
    return (
        <header className="v-header ">
                <div className="vid">
                    <video src={video} autoPlay={true} muted>
                    </video>
                </div>
        </header>
    )
}